import './../../css/titleCss/Title.css'
import { SentenceCounterSliceType } from './../../type/Type'
import { useNavigate } from 'react-router-dom'

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


export default TitlePageBookBox