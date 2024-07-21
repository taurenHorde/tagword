import './../css/Input.css'
import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../app/store';
import { sentenceUserInputDataTotal, SentenceSubmitFcType, ReduxAllType, SentenceStoreSliceType } from '../type/Type';
import { validationTotal } from './../function/validation'
import { addSentence } from '../app/action1/sentenceStoreSlice';
import { plusParagraphCount, plusSentenceCount, lastWordsChange, lastWordsReset } from '../app/action1/sentenceCounterSlice';


function InputPage(): JSX.Element {

    const sentenceStoreSlice = useAppSelector((state: ReduxAllType) => state.sentenceStoreSlice)
    const sentenceCounterSlice = useAppSelector((state: ReduxAllType) => state.sentenceCounterSlice)
    const dispatch = useAppDispatch()

    const [inputSentence, setInputSentece] = useState<string>("")
    const [inputNickname, setInputNickname] = useState<string>("")
    const [inputPassword, setInputPassword] = useState<string>("")
    const [footNoteCheckBox, setFootNoteCheckBox] = useState<boolean>(false)
    const [inputFootNote, setInputFootNote] = useState<string>("")
    const [changeParagraph, setChangeParagraph] = useState<boolean>(false)
    const [inputAble, setInputAble] = useState<boolean>(true)

    const sentenceSubmit: SentenceSubmitFcType = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setInputAble(false)
        const userInputData: sentenceUserInputDataTotal = await {
            content: inputSentence,
            footnote: inputFootNote,
            nickname: inputNickname,
            password: inputPassword,
            footNoteCheckBox: footNoteCheckBox,
            changeParagraph: changeParagraph,
        } // 사용자 입력데이터 Obj 정리
        const validationResult = await validationTotal(userInputData) // 검증절차 실행 
        if (validationResult.error) {
            alert(validationResult.error)
        } else { // 검증 문제 없을 시
            const { lastWords } = sentenceCounterSlice;
            const inputFirstWord = inputSentence[0]
            if (!lastWords.includes(inputFirstWord) && !sentenceCounterSlice.newStart) { // 첫 글자 틀렸을 때
                alert(`반드시 ${lastWords} 중 한 글자로 시작하셔야합니다.`)
            } else { // 첫 글자 맞으면 dispatch 작업
                const lastSentence: SentenceStoreSliceType = sentenceStoreSlice.slice(-1)[0]
                dispatch(
                    addSentence({
                        ...userInputData,
                        no: lastSentence.no + 1,
                        expression: [0, 0, 0, 0],
                        comments: 0,
                        writeDate: '2024-07-20',
                        paragraph: 1
                    }))
                dispatch(plusSentenceCount());
                if (changeParagraph) { // 문단 끝내기 희망시 
                    dispatch(plusParagraphCount())
                    dispatch(lastWordsReset(true))
                } else { // 문단 끝내기 비희망시
                    dispatch(lastWordsChange(inputSentence))
                    dispatch(lastWordsReset(false))
                }

                setInputSentece("")
                setInputFootNote("")
                setFootNoteCheckBox(false)
                setChangeParagraph(false)
            }

        }
        setInputAble(true)
    }


    return (
        <div className='InputPageWrap flex column '>
            <form onSubmit={(e) => sentenceSubmit(e)}>
                <div className='inputBox flex column jc-center ai-center'>
                    <input
                        type="text"
                        placeholder='이야기 입력창'
                        onChange={(e) => setInputSentece(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder='주석을 입력하시려면 주석 달기 체크박스를 클릭해주세요.'
                        onChange={(e) => setInputFootNote(e.target.value)}
                        disabled={!footNoteCheckBox}
                    />
                </div>
                <div className='inputOption flex row jc-end ai-center'>
                    <div className='inputCheckbox flex column ai-center'>
                        <label><input type='checkbox' onChange={(e) => setFootNoteCheckBox(e.target.checked)} />주석 추가</label>
                        <label><input type='checkbox' onChange={(e) => setChangeParagraph(e.target.checked)} />문단 끝내기</label>
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