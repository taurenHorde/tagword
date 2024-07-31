import './../../css/mainCss/Input.css'
import moment from 'moment';
import { useState } from 'react';
import { useAppSelector, useAppDispatch } from './../../app/store';
import { SentenceUserInputDataTotal, ReduxAllType, SentenceUserInputType, ValidationInputSentenceFucRetrunType } from './../../type/Type';
import { validationInputSentence } from './../../function/validation'
import { io, Socket } from 'socket.io-client'
import { serverToCounter } from '../../app/action1/sentenceCounterSlice';
import { serverToSentence } from '../../app/action1/sentenceStoreSlice';
import { useParams } from 'react-router-dom';

const socket: Socket = io()


function InputPage(): JSX.Element {

    socket.on('addSentenceResult', (resData) => {
        const { sentenceResData, counterResData } = resData
        dispatch(serverToCounter(counterResData))
        dispatch(serverToSentence(sentenceResData))
    })
    
    const dispatch = useAppDispatch()
    const { id } = useParams();
    const currentDate = moment(new Date()).format('YYYY-M-D HH:mm:ss')
    const sentenceCounterSlice = useAppSelector((state: ReduxAllType) => state.sentenceCounterSlice)
    const lastWords = sentenceCounterSlice.mode ?
        "[자유모드] 자유롭게 입력해주세요."
        : sentenceCounterSlice.newStart
            ? '새로운 문단의 시작입니다. 자유롭게 시작해보세요. 처음에 재밌게 시작해야 끝까지 재밌습니다.'
            : `[${sentenceCounterSlice.lastWords.join(' | ')}] 로 시작되는 문장을 자유롭게 적어주세요.`


    const [inputSentence, setInputSentece] = useState<string>("")
    const [inputNickname, setInputNickname] = useState<string>("")
    const [inputPassword, setInputPassword] = useState<string>("")
    const [footNoteCheckBox, setFootNoteCheckBox] = useState<boolean>(false)
    const [inputFootNote, setInputFootNote] = useState<string>("")
    const [changeParagraph, setChangeParagraph] = useState<boolean>(false)
    const [inputAble, setInputAble] = useState<boolean>(true)

    const sentenceSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setInputAble(false)
        const userInputData: SentenceUserInputDataTotal = await {
            content: inputSentence,
            footnote: inputFootNote,
            nickname: inputNickname,
            password: inputPassword,
            footNoteCheckBox: footNoteCheckBox,
            changeParagraph: changeParagraph,
        } // 사용자 입력데이터 Obj 정리
        const validationResult: ValidationInputSentenceFucRetrunType = await validationInputSentence(userInputData) // 검증절차 실행 
        if (validationResult.error) {
            alert(validationResult.error)
        } else { // 검증 문제 없을 시
            const thisBookMode = sentenceCounterSlice.mode;
            const afterValidationDate: SentenceUserInputType = validationResult.value
            if (!thisBookMode) {
                const { lastWords } = sentenceCounterSlice;
                const inputFirstWord: string = inputSentence[0]
                if (!lastWords.includes(inputFirstWord) && !sentenceCounterSlice.newStart) { // 첫 글자 틀렸을 때
                    return alert(`반드시 ${lastWords} 중 한 글자로 시작하셔야합니다.`)
                }
            }
            socket.emit('addSentence', {
                ...afterValidationDate,
                no: sentenceCounterSlice.sentenceCount + 1,
                expression: [0, 0, 0, 0],
                comments: 0,
                writeDate: currentDate,
                paragraph: sentenceCounterSlice.paragraphCount,
                changeParagraph: changeParagraph,
                params: id
            }) //
            setInputSentece("")
            setInputFootNote("")
            setFootNoteCheckBox(false)
            setChangeParagraph(false)
            setInputAble(true)
        }

    }

    return (
        <div className='InputPageWrap flex column '
            style={!inputAble ? { userSelect: 'none' } : {}}
        >
            <form onSubmit={(e) => sentenceSubmit(e)}>
                <div className='inputBox flex column jc-center ai-center'>
                    <input
                        type="text"
                        placeholder={lastWords}
                        onChange={(e) => setInputSentece(e.target.value)}
                        value={inputSentence}
                    />
                    {footNoteCheckBox && (
                        <input
                            type="text"
                            placeholder='메모를 남겨 뒷 사람에게 이야기를 남기세요.'
                            onChange={(e) => setInputFootNote(e.target.value)}
                            disabled={!footNoteCheckBox}
                            value={inputFootNote}
                        />
                    )}
                </div>
                <div className='inputOption flex row jc-end ai-center'>
                    <div className='inputCheckbox flex row ai-center'>
                        <label><input type='checkbox' onChange={(e) => setFootNoteCheckBox(e.target.checked)} checked={footNoteCheckBox} />메모 남기기</label>
                        <label><input type='checkbox' onChange={(e) => setChangeParagraph(e.target.checked)} checked={changeParagraph} />문단 끝내기</label>
                    </div>
                    <div className='inputInfo flex row ai-center'>
                        <input
                            type='text'
                            placeholder='닉네임'
                            onChange={(e) => setInputNickname(e.target.value)}
                        />
                        <input
                            type='password'
                            placeholder='비밀번호'
                            onChange={(e) => setInputPassword(e.target.value)}
                        />
                    </div>
                    <button type='submit'>등록</button>
                </div>
            </form>
        </div>
    )
}




export default InputPage;