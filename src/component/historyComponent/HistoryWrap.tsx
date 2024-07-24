import './../../css/historyCss/HistoryWrap.css'
import { useAppSelector } from '../../app/store'
import { ReduxAllType, SentenceType } from '../../type/Type'
function HistoryWarpPage(): JSX.Element {

    const sentenceStoreSlice = useAppSelector((state: ReduxAllType) => state.sentenceStoreSlice)
    return (
        <div className='HistoryWrapPage'>
            {sentenceStoreSlice.map((val, idx) =>
                <HistoryBox
                    key={idx}
                    sentenceData={val}
                />
            )}
        </div>
    )
}


function HistoryBox(props: { sentenceData: SentenceType }): JSX.Element {
    const sentenceData: SentenceType = props.sentenceData
    return (
        <div
            className='historyBoxWrap flex column jc-start ai-start'>
            <div className='historyBoxHead flex column jc-start ai-start'>
                <div className='historyContent'>
                    <p>{sentenceData.content}</p>
                </div>
                {sentenceData.footnote && (
                    <div className='historyFootnote'>
                        <p>[주석] {sentenceData.footnote}</p>
                    </div>
                )}
            </div>
            <div className='historyBoxBody flex row jc-start ai-center'>
                <div className='historyNo'>
                    <p>글번호 {sentenceData.no}</p>
                </div>
                <div className='historyParagraph'>
                    <p>문단 {sentenceData.paragraph}</p>
                </div>
                <div className='historyNickname'>
                    <p>닉네임 : {sentenceData.nickname}</p>
                </div>
                <div className='historyWriteDate'>
                    <p>작성일 : {sentenceData.writeDate}</p>
                </div>
                {['🤣', '🥹', '👍', '❤️'].map((val, idx) =>
                    <div className='historyExpressions' key={idx}>
                        <p>{val}{sentenceData.expression[idx]}</p>
                    </div>
                )}
                <div className='historyComments'>
                    <p>💬{sentenceData.comments}</p>
                </div>
            </div>
        </div>
    )
}


export default HistoryWarpPage