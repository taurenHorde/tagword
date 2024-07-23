import './../../css/mainCss/Keyword.css'
import { ReduxAllType } from './../../type/Type';
import { useAppSelector } from './../../app/store';

function KeywordPage(): JSX.Element {

    const sentenceStoreSlice = useAppSelector((state: ReduxAllType) => state.sentenceStoreSlice)
    const sentenceCounterSlice = useAppSelector((state: ReduxAllType) => state.sentenceCounterSlice)

    const lastSentence = sentenceStoreSlice.slice(-1)[0]
    const lastWords = sentenceCounterSlice.newStart
        ? '새로운 문단의 시작입니다. 자유롭게 시작해보세요. 처음에 재밌게 시작해야 끝까지 재밌습니다.'
        : `[${sentenceCounterSlice.lastWords.join(' | ')}] 로 시작되는 문장을 자유롭게 적어주세요.`

    const infoText = sentenceCounterSlice.newStart
        ? "이전 문단과 자연스럽게 연결이 되도록 적어주세요."
        : "이전 문장"

    return (
        <div className="KeywordPageWrap flex column jc-center ai-start">
            <div className='keywordPageHead'>
                <h6>{infoText} </h6>
            </div>
            <div className='keywordPageBody'>
                <p>{sentenceCounterSlice.newStart ? "" : lastSentence.content}</p>
            </div>
            <div className='keywordPageFooter'>
                <p> {lastWords} </p>
            </div>

        </div>
    )
}


export default KeywordPage