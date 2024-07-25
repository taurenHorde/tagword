import './../../css/mainCss/Keyword.css'
import { ReduxAllType } from './../../type/Type';
import { useAppSelector } from './../../app/store';

function KeywordPage(): JSX.Element {

    const sentenceStoreSlice = useAppSelector((state: ReduxAllType) => state.sentenceStoreSlice)
    const sentenceCounterSlice = useAppSelector((state: ReduxAllType) => state.sentenceCounterSlice)

    const lastSentence = sentenceStoreSlice.slice(-1)[0]

    const infoText = sentenceCounterSlice.newStart
        ? "이전 문단과 자연스럽게 연결이 되도록 적어주세요."
        : "마지막 문장"

    return (
        <div className="KeywordPageWrap flex column jc-center ai-start">
            <div className='keywordPageHead'>
                <h6 onClick={()=>{
                    console.log(sentenceCounterSlice)
                    console.log(sentenceStoreSlice)
                }}>{infoText} </h6>
            </div>
            <div className='keywordPageBody'>
                <p>{sentenceCounterSlice?.newStart ? "" : lastSentence?.content}</p>
            </div>
        </div>
    )
}


export default KeywordPage