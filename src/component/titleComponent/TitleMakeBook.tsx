import './../../css/titleCss/TitleMakeBook.css'
import { useState } from 'react'
import { MakeSumbitFcType, MakeBookCheckFcType } from './../../type/Type'
import { useMutation } from 'react-query'
import { makeSumbitPost } from './../../function/Api'
import { validationInputBook } from './../../function/validation'


function TitlePageMakeBook(props: { makeBookCheckFc: MakeBookCheckFcType }): JSX.Element {
    const makeBookCheckFc = props.makeBookCheckFc
    const [make, setMake] = useState<boolean>(false)
    const [makeTitle, setMakeTitle] = useState<string>("")
    const [makeTopic, setMakeTopic] = useState<string>("")
    const [makeDirection, setMakeDirection] = useState<string>("")
    const [makePassword1, setMakePassword1] = useState<string>("")
    const [makePassword2, setMakePassword2] = useState<string>("")
    const [makeMode, setMakeMode] = useState<boolean>(true)

    const makeSubmitMutation = useMutation(makeSumbitPost, {
        onSuccess: (data) => {
            setMake(false)
            setMakeTitle("")
            setMakeTopic("")
            setMakeDirection("")
            setMakePassword1("")
            setMakePassword2("")
            makeBookCheckFc()
        },
        onError: (error) => {
            console.log('작동에러')
            console.log(error)
        }
    })

    const makeSubmit: MakeSumbitFcType = async (e) => {
        e.preventDefault();
        const validatationResult = await validationInputBook({
            title: makeTitle,
            topic: makeTopic,
            direction: makeDirection,
            password1: makePassword1,
            password2: makePassword2,
            mode: makeMode
        })
        if (validatationResult.error) {
            alert(validatationResult.error)
        } else {
            await makeSubmitMutation.mutate({
                title: makeTitle,
                topic: makeTopic,
                direction: makeDirection,
                password1: makePassword1,
                password2: makePassword2,
                mode: makeMode
            })
        }
    }
    
    return <div className='TitlePageMakeBookWrap'>
        {make ? <>
            <form onSubmit={(e) => makeSubmit(e)}>
                <div className='titlePageMakeBookDiv2 flex column jc-start al-start'>
                    <div className='makeTitle'>
                        <input
                            type='text'
                            placeholder='소설 제목'
                            onChange={(e) => setMakeTitle(e.target.value)}
                            value={makeTitle}
                        />
                    </div>
                    <div className='makeTopic'>
                        <input
                            type='text'
                            placeholder='소설 주제'
                            onChange={(e) => setMakeTopic(e.target.value)}
                            value={makeTopic}
                        />
                    </div>
                    <div className='makeDirection'>
                        <input
                            type='text'
                            placeholder='소설 방향'
                            onChange={(e) => setMakeDirection(e.target.value)}
                            value={makeDirection}
                        />
                    </div>
                    <div className='makePassword flex row jc-start ai-center'>
                        <input
                            type='password'
                            placeholder='비밀번호'
                            onChange={(e) => setMakePassword1(e.target.value)}
                            value={makePassword1}
                        />
                        <input
                            type='password'
                            placeholder='비밀번호 재입력'
                            onChange={(e) => setMakePassword2(e.target.value)}
                            value={makePassword2}
                        />
                        <p className='makePasswordInfo'>⚠️</p>
                    </div>
                    <div className='makeButton flex row jc-space ai-center'>
                        <div className='makeButtonMode flex row jc-start ai-center'>
                            <div
                                style={{ background: makeMode ? 'yellow' : 'white' }}
                                onClick={() => setMakeMode(true)}
                            >자유 모드</div>
                            <div
                                style={{ background: !makeMode ? 'yellow' : 'white' }}
                                onClick={() => setMakeMode(false)}
                            >끝말잇기 모드</div>
                        </div>
                        <div className='flex row jc-end ai-center'>
                            <button type='submit'>만들기</button>
                            <button onClick={() => setMake(false)}>취소</button>
                        </div>
                    </div>
                </div>
            </form>
        </> : <>
            <div className='titlePageMakeBookDiv1 flex jc-center ai-center'>
                <div className='titlePageMakeBookBut flex jc-center ai-center'
                    onClick={() => setMake(true)}
                >
                    <h6>+</h6>
                </div>
            </div>
        </>}
    </div>
}


export default TitlePageMakeBook;