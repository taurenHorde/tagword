import './../css/Input.css'
import { useState } from 'react';
import { useAppSelector } from '../app/store';
import { sentenceUserInputDataTotal, SentenceSubmitFcType, ReduxAllType } from '../type/Type';
import { validationTotal } from './../function/validation'

function InputPage(): JSX.Element {

    const { sentenceStoreSlice, sentenceCounterSlice } = useAppSelector((state: ReduxAllType) => state)
    const [inputSentence, setInputSentece] = useState<string>("")
    const [inputNickname, setInputNickname] = useState<string>("")
    const [inputPassword, setInputPassword] = useState<string>("")
    const [footNoteCheckBox, setFootNoteCheckBox] = useState<boolean>(false)
    const [inputFootNote, setInputFootNote] = useState<string>("")
    const [changeParagraph, setChangeParagraph] = useState<boolean>(false)

    const sentenceSubmit: SentenceSubmitFcType = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
        } else {
            console.log(sentenceStoreSlice)
            console.log(sentenceCounterSlice)

        }

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
                        <label><input type='checkbox' onChange={(e) => setFootNoteCheckBox(e.target.checked)} />주석 달기</label>
                        <label><input type='checkbox' onChange={(e) => setChangeParagraph(e.target.checked)} />문단 변경</label>
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