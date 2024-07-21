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
            <div>
                🤣 | {modalData?.expression[0]}
            </div>
            <div>
                🥹 | {modalData?.expression[1]}
            </div>
            <div>
                👍 | {modalData?.expression[2]}
            </div>
            <div>
                ❤️ | {modalData?.expression[3]}
            </div>
            <div>
                💬 | {modalData?.expression[0]}
            </div>
        </div>
        <div className='storyModalInfo flex row ai-center'>
            <div>
                <p>닉네임 : {modalData?.nickname}</p>
            </div>
            <div>
                <p>등록일 : {modalData?.writeDate}</p>
            </div>
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
    const sentenceClick:SentenceClickFcType = props.sentenceClick
    const verticalElement: VerticalEleFcType = (premier) => premier && (<span className='storyVertical'>[+]</span>)
    return <span
        className='storySentence'
        onClick={(event) => sentenceClick(props.sentenceData, event)}>
        {content}
        {footnote && (verticalElement(footnote))}
    </span>
}





export default StoryPage 