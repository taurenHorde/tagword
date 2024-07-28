import './../../css/mainCss/Story.css'
import { SentenceType, SentenceClickFcType, ReduxAllType } from './../../type/Type';
import { useAppSelector, useAppDispatch } from './../../app/store';
import { mainTabControl } from '../../app/action2/mainControllerSlice';
import { clickSentenceIdx } from '../../app/action2/clickSentenceDataSlice';

function StoryPage(): JSX.Element {
    const dispatch = useAppDispatch();
    const sentenceStoreSlice = useAppSelector((state: ReduxAllType) => state.sentenceStoreSlice)
    const sentenceCounterSlice = useAppSelector((state: ReduxAllType) => state.sentenceCounterSlice)


    const sentenceClickFc: SentenceClickFcType = (sentenceData) => {
        dispatch(mainTabControl(3))
        dispatch(clickSentenceIdx(sentenceData))
    }

    return (
        <div className="StoryPageWrap" >
            <div className='storyBox'>
                {new Array(sentenceCounterSlice.paragraphCount).fill("").map((_, idxPara) =>
                    <p className='storyParagraph' key={idxPara}>
                        {sentenceStoreSlice.map((val: SentenceType, idx: number) => {
                            if (val.paragraph !== idxPara + 1) return null;
                            return <StorySentence
                                key={idx}
                                sentenceClickFc={sentenceClickFc}
                                sentenceData={val}
                                sentenceIndex={idx}
                            />
                        }
                        )}
                    </p>
                )}
            </div>
        </div>
    )
}

function StorySentence(
    props: {
        sentenceData: SentenceType,
        sentenceClickFc: SentenceClickFcType,
        sentenceIndex: number,
    }): JSX.Element {

    const sentenceData = props.sentenceData;
    const sentenceClick: SentenceClickFcType = props.sentenceClickFc

    return <span
        className='storySentence'
        onClick={() => sentenceClick(sentenceData)}>
        {sentenceData.content}
    </span>
}


export default StoryPage 