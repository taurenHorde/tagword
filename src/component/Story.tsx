import './../css/Story.css'
import { SentenceType, VerticalEleFcType, SentenceClickFcType, StoryModalEleFcType, ReduxAllType } from './../type/Type';
import { useState } from 'react';
import { useAppSelector } from '../app/store';


function StoryPage(): JSX.Element {

    const sentenceStoreSlice = useAppSelector((state: ReduxAllType) => state.sentenceStoreSlice)
    const sentenceCounterSlice = useAppSelector((state: ReduxAllType) => state.sentenceCounterSlice)

    const [modal, setModal] = useState<boolean>(false);
    const [modalData, setModalData] = useState<SentenceType>();

    const sentenceClick: SentenceClickFcType = function (no, event) {
        setModal(true);
        setModalData(no)
    }
    const storyModalElement: StoryModalEleFcType = () => <div
        className='storyModalBox flex column jc-center ai-center'>
        <div className='storyModalExpression flex row ai-center'>
            {['🤣', '🥹', '👍', '❤️'].map((val, idx) => <div key={idx}>
                {val} | {modalData?.expression[idx]}
            </div>
            )}
            <div>
                💬 | {modalData?.comments}
            </div>
        </div>
        <div className='storyModalInfo flex row ai-center'>
            {['닉네임', '등록일'].map((val, idx) => {
                const dataValue = [modalData?.nickname, modalData?.writeDate]
                return <div key={idx}><p>{val} : {dataValue[idx]}</p></div>
            })}
        </div>
        <div className='storyModalButton flex row ai-center'>
            <div>
                <p>기록(댓글) 보기</p>
            </div>
            <div>
                <p onClick={() => {
                    setModal(false)
                }}>나가기</p>
            </div>
        </div>
    </div>

    return (
        <div className="StoryPageWrap">
            <div className='storyBox'>
                <p className='storyParagraph'>
                    {sentenceStoreSlice.map((val: SentenceType, idx: number) => <StorySentence key={idx} sentenceClick={sentenceClick} sentenceData={val} />)}
                </p>
                {modal && (<div className='storyModalWrap'>{storyModalElement()}</div>)}
            </div>
        </div>
    )
}

function StorySentence(props: { sentenceData: SentenceType, sentenceClick: SentenceClickFcType }): JSX.Element {
    const { content, footnote } = props.sentenceData;
    const sentenceClick: SentenceClickFcType = props.sentenceClick
    const verticalElement: VerticalEleFcType = (premier) => premier && (<span className='storyVertical'>[+]</span>)
    return <span
        className='storySentence'
        onClick={(event) => sentenceClick(props.sentenceData, event)}>
        {content}
        {footnote && (verticalElement(footnote))}
    </span>
}


export default StoryPage 