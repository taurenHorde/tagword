import './../css/Input.css'
import { useAppSelector, useAppDispatch } from '../app/store';
import { ReduxAllType } from './Type';
import { useState } from 'react';

function InputPage(): JSX.Element {

    const { sentenceStoreSlice, sentenceActionSlice } = useAppSelector((state: ReduxAllType) => state)
    const dispatch = useAppDispatch();

    const [inputSentence, setInputSentece] = useState<string>("")
    const [inputNickname, setInputNickname] = useState<string>("")
    const [inputPassword, setInputPassword] = useState<string>("")
    const [footNoteCheckBox, setFootNoteCheckBox] = useState<boolean>(false)
    const [inputFootNote, setInputFootNote] = useState<string>("")
    const [changeParagraph, setChangeParagraph] = useState<boolean>(false)

    const sentenceSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // validation 작업 - 넣을예정
        const { sentenceCount, pageCount, paragraphCount } = sentenceStoreSlice
        const submitData = {
            no: sentenceCount + 1,
            content: inputSentence,
            footnote: footNoteCheckBox ? inputFootNote : "",
            expression: [0, 0, 0, 0],
            nickname: inputNickname,
            password: inputPassword,
            sentence: changeParagraph ? paragraphCount + 1 : paragraphCount,
            comments: 0,
            writeDate: '2024-07-20',
            paragraph: 1
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
                        onChange={(e) => setInputSentece(e.target.value)}
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