import { useEffect, useState } from 'react';
import './../../css/titleCss/TitleBook.css'
import { MakeBookCheckFcType, SentenceCounterSliceType } from './../../type/Type'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { editSumbitPost, closeSumbitPost } from './../../function/Api'
import { validationInputBookEdit, validationInputBookClose } from '../../function/validation';
import { TitlePageBooKBoxWrapStyled } from '../../css/styled';

function TitlePageBookBox(props: { bookData: SentenceCounterSliceType, makeBookCheckFc: MakeBookCheckFcType }): JSX.Element {
    const navigate = useNavigate();
    const editSubmitMutation = useMutation(editSumbitPost, {
        onSuccess: (data) => {
            makeBookCheckFc();
        },
        onError: (error) => {
            console.log('작동에러')
            console.log(error)
        }
    })
    const closeSubmitMutation = useMutation(closeSumbitPost, {
        onSuccess: (data) => {
            makeBookCheckFc();
        },
        onError: (error) => {
            console.log('작동에러')
            console.log(error)
        }
    })
    useEffect(() => {
        setEditTopic(bookData.topic)
        setEditDirection(bookData.direction)
        setEditPassword('')
    }, [])
    const { bookData, makeBookCheckFc } = props;
    const [admin, setAdmin] = useState<boolean>(false)
    const [editPassword, setEditPassword] = useState<string>('')
    const [editTopic, setEditTopic] = useState<string>('')
    const [editDirection, setEditDirection] = useState<string>('')
    const [closeCheck, setCloseCheck] = useState<boolean>(false)

    const editSubmit = async () => {
        const validationResult = await validationInputBookEdit({
            editTopic: editTopic,
            editDirection: editDirection,
            editPassword: editPassword
        })
        if (validationResult.error) {
            alert(validationResult.error)
        } else {
            await editSubmitMutation.mutate({
                editData: {
                    editTopic: editTopic,
                    editDirection: editDirection,
                    editPassword: editPassword
                },
                bookId: bookData._id
            })
        }
    }
    const editDataReset = () => {
        setEditTopic(bookData.topic)
        setEditDirection(bookData.direction)
        setEditPassword('')
        setAdmin(false)
    }
    const closeSubmit = async () => {
        const validationResult = await validationInputBookClose({
            password: editPassword
        })
        if (validationResult.error) {
            alert(validationResult.error)
            setCloseCheck(false)
        } else {
            if (closeCheck) {
                await closeSubmitMutation.mutate({ bookId: bookData._id, password: editPassword })
            } else {
                alert('집필완료를 희망하시는 경우엔 다시 한번 눌러주세요.')
                setCloseCheck(true)
            }
        }
    }

    return (
        <TitlePageBooKBoxWrapStyled $pageClose={bookData.pageClose}>
            <div className='bookTitle flex row jc-start al-center'>
                <h6>{bookData.books}. {bookData.title}</h6>
            </div>
            <div className='bookTopic flex row jc-start al-center'>
                {!admin ?
                    <p>주제 : {bookData.topic}</p>
                    :
                    <input
                        type='text'
                        placeholder={bookData.topic}
                        onChange={(e) => setEditTopic(e.target.value)}
                        defaultValue={editTopic}
                    />
                }
            </div>
            <div className='bookDirection flex row jc-start al-center'>
                {!admin ?
                    <p>방향 : {bookData.direction}</p>
                    :
                    <input
                        type='text'
                        placeholder={bookData.direction}
                        onChange={(e) => setEditDirection(e.target.value)}
                        defaultValue={editDirection}
                    />
                }
            </div>
            <div className='flex row jc-space al-center'>
                <div className='bookInfo flex row jc-start al-center'>
                    <div className='flex jc-center al-center'>
                        <p> 총 문장의 갯수 : {bookData.sentenceCount}</p>
                    </div>
                    <div className='flex jc-center al-center'>
                        <p> {bookData.mode ? "자유모드" : "끝말잇기 모드"}</p>
                    </div>
                    {bookData.pageClose && (
                        <div className='flex jc-center al-center'>
                            <p> 집필종료 </p>
                        </div>
                    )}
                </div>
                <div className='bookButton flex row jc-end al-center'>
                    <button onClick={() => navigate(`@book${bookData.books}/main`)}>입장</button>
                    {!bookData.pageClose && (
                        <button onClick={() => setAdmin(true)}>관리자</button>
                    )}
                </div>
            </div>
            <div
                className='bookAdmin row jc-space al-start'
                style={{ display: admin ? "flex" : "none" }}
            >
                <div className='bookAdminPassword'>
                    <input
                        type='password'
                        placeholder='관리자비밀번호.'
                        onChange={(e) => setEditPassword(e.target.value)}
                        value={editPassword}
                    />
                </div>
                <div className='bookAdminSelect'>
                    <button onClick={() => closeSubmit()}
                        style={{ background: closeCheck ? "skyblue" : "" }}>집필완료</button>
                    <button onClick={() => editSubmit()}>수정</button>
                    <button onClick={() => editDataReset()}>취소</button>
                </div>
            </div>
        </TitlePageBooKBoxWrapStyled>
    )
}


export default TitlePageBookBox