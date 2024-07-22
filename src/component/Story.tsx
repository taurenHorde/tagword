import './../css/Story.css'
import { SentenceType, VerticalEleFcType, SentenceClickFcType, StoryModalEleFcType, ReduxAllType, SentenceFootnoteMouseOverFcType, FootnoteEleFcType, FootnoteExtractFcReturnType } from './../type/Type';
import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../app/store';
import { addExpression } from '../app/action1/sentenceStoreSlice';

function StoryPage(): JSX.Element {

    const dispatch = useAppDispatch();

    const sentenceStoreSlice = useAppSelector((state: ReduxAllType) => state.sentenceStoreSlice)
    const sentenceCounterSlice = useAppSelector((state: ReduxAllType) => state.sentenceCounterSlice)
    const footnoteConversionData = useAppSelector((state: ReduxAllType) => state.footnoteConversionStoreSlice)

    const [modal, setModal] = useState<boolean>(false);
    const [modalDataIndex, setModalDataIndex] = useState<number>(-1)
    const [modalFootnote, setModalFootnote] = useState<boolean>(false)
    const [modalfootnotePosition, setModalFootnotePosition] = useState<number[]>([0, 0])

    const sentenceClickFc: SentenceClickFcType = (idx) => { setModal(true); setModalDataIndex(idx) }
    const sentenceFootnoteMouseOverFc: SentenceFootnoteMouseOverFcType = (event, over, idx) => {
        setModalFootnotePosition(over ? [event.clientX, event.clientY] : [0, 0]); setModalFootnote(over); setModalDataIndex(idx)
    }
    const expressionClickFc = (expressionIdx: number) => {
        dispatch(addExpression([expressionIdx, modalDataIndex]))
    };
    const storyModalElement: StoryModalEleFcType = () => <div
        className='storyModalBox flex column jc-center ai-center'>
        <div className='storyModalExpression flex row ai-center'>
            {['🤣', '🥹', '👍', '❤️'].map((val, idx) => <div key={idx} onClick={() => expressionClickFc(idx)}>
                {val} | {sentenceStoreSlice[modalDataIndex]?.expression[idx]}
            </div>
            )}
            <div>
                💬 | {sentenceStoreSlice[modalDataIndex]?.comments}
            </div>
        </div>
        <div className='storyModalInfo flex row ai-center'>
            {['닉네임', '등록일'].map((val, idx) => {
                const dataValue = [sentenceStoreSlice[modalDataIndex]?.nickname, sentenceStoreSlice[modalDataIndex]?.writeDate]
                return <div key={idx}><p>{val} : {dataValue[idx]}</p></div>
            })}
        </div>
        <div className='storyModalButton flex row ai-center'>
            <div>
                <p onClick={() => console.log(sentenceStoreSlice)}>기록(댓글) 보기</p>
            </div>
            <div>
                <p onClick={() => {
                    setModal(false)
                    setModalDataIndex(-1)
                }}>나가기</p>
            </div>
        </div>
    </div>
    const footnoteElement: FootnoteEleFcType = () => <div
        className='storyModalFootnote'
        style={{ left: modalfootnotePosition[0], top: modalfootnotePosition[1] }}
    >
        <p>{sentenceStoreSlice[modalDataIndex].footnote}</p>
    </div>

    return (
        <div className="StoryPageWrap">
            <div className='storyBox'>
                {new Array(sentenceCounterSlice.paragraphCount).fill("").map((_, idxPara) =>
                    <p className='storyParagraph' key={idxPara}>
                        {sentenceStoreSlice.map((val: SentenceType, idx: number) => {
                            if (val.paragraph !== idxPara + 1) return null;
                            return <StorySentence
                                key={idx}
                                sentenceClickFc={sentenceClickFc}
                                sentenceFootnoteMouseOverFc={sentenceFootnoteMouseOverFc}
                                footnoteConversionData={footnoteConversionData}  // -------------
                                sentenceData={val}
                                sentenceIndex={idx}
                            />
                        }
                        )}
                    </p>
                )}
                {modal && (<div className='storyModalWrap'>{storyModalElement()}</div>)}
                {modalFootnote && (footnoteElement())}
            </div>
        </div>
    )
}

function StorySentence(
    props: {
        sentenceData: SentenceType,
        sentenceClickFc: SentenceClickFcType,
        sentenceIndex: number,
        sentenceFootnoteMouseOverFc: SentenceFootnoteMouseOverFcType,
        footnoteConversionData: FootnoteExtractFcReturnType[]  // 오늘은 여기까지 
    }): JSX.Element {

    const { content, footnote } = props.sentenceData;
    const sentenceClick: SentenceClickFcType = props.sentenceClickFc
    const sentenceIndex: number = props.sentenceIndex
    const sentenceFootnoteMouseOverFc: SentenceFootnoteMouseOverFcType = props.sentenceFootnoteMouseOverFc
    const verticalElement: VerticalEleFcType = (premier) => premier && (<span
        className='storyVertical'
        onMouseOver={(event) => sentenceFootnoteMouseOverFc(event, true, sentenceIndex)}
        onMouseOut={(event) => sentenceFootnoteMouseOverFc(event, false, sentenceIndex)}
        onClickCapture={(event) => event.stopPropagation()}
    >
        [+]
    </span>
    )
    return <span
        className='storySentence'
        onClick={() => sentenceClick(sentenceIndex)}>
        {content}
        {footnote && (verticalElement(footnote))}
    </span>
}


export default StoryPage 