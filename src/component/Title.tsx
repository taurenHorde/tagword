
import './../css/Title.css'
import { useEffect, useState } from 'react'
import { MakeSumbitFcType, MakeBookCheckFcType, SentenceCounterSliceType } from '../type/Type'
import { useMutation } from 'react-query'
import { makeSumbitPost, booksGet } from '../function/Api'
import { useNavigate } from 'react-router-dom'
import { validationInputBook } from '../function/validation'




function TitlePage(): JSX.Element {

    const [revice, setRecive] = useState<boolean>(false)
    const [bookData, setBookData] = useState<SentenceCounterSliceType[]>();
    const booksGetMutation = useMutation(booksGet, {
        onSuccess: (data) => {
            setBookData(data.books)
        },
        onError: (error) => {
            console.log('작동에러')
            console.log(error)
        }
    })
    useEffect(() => {
        booksGetMutation.mutate();
    }, [revice])


    const makeBookCheckFc: MakeBookCheckFcType = () => {
        setRecive(pre => !pre)
    }

    return <div className='TitlePageWrap'>
        <div className='titlePageBox flex column jc-start ai-center'>
            <TitlePageInfo />
            <TitlePageMakeBook makeBookCheckFc={makeBookCheckFc} />
            {bookData?.map((val, idx) =>
                <TitlePageBookBox key={idx} bookData={val} />
            )}
        </div>
    </div>
}

function TitlePageInfo(): JSX.Element {

    const [open, setOpen] = useState<boolean>(false)

    return <div className='TitlePageInfoWrap flex column jc-start ai-center'>
        <div className='titlePageInfoHead flex column jc-start ai-center'>
            <div>
                <h5>📒</h5>
            </div>
            <div>
                <h6>끝말잇기로 쓰는 소설</h6>
            </div>
            <div>
                <p onClick={() => setOpen(pre => !pre)}>{open ? "▲접기▲" : "▼펼치기▼"}</p>
            </div>
        </div>
        <div className='titlePageInfoBody flex column jc-start ai-center'
            style={{ height: open ? "auto" : "0px" }}>

        </div>
    </div>
}

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
            console.log(data)
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

function TitlePageBookBox(props: { bookData: SentenceCounterSliceType }): JSX.Element {

    const navigate = useNavigate();
    const bookData = props.bookData;

    return (
        <div className='TitlePageBookBoxWarp flex column jc-start al-start'>
            <div className='bookTitle flex row jc-start al-center'>
                <h6>{bookData.books}. {bookData.title}</h6>
            </div>
            <div className='bookTopic flex row jc-start al-center'>
                <p>주제 : {bookData.topic}</p>
            </div>
            <div className='bookDirection flex row jc-start al-center'>
                <p>방향 : {bookData.direction}</p>
            </div>
            <div className='flex row jc-space al-center'>
                <div className='bookInfo flex row jc-start al-center'>
                    <div className='flex jc-center al-center'>
                        <p> 총 문장의 갯수 : {bookData.sentenceCount}</p>
                    </div>
                    <div className='flex jc-center al-center'>
                        <p> {bookData.mode ? "자유모드" : "끝말잇기 모드"}</p>
                    </div>
                </div>
                <div className='bookButton flex row jc-end al-center'>
                    <button onClick={() => navigate(`@book${bookData.books}/main`)}>입장</button>
                    <button>관리자(구현x)</button>
                </div>
            </div>
        </div>
    )
}

export default TitlePage
