import './../../css/mainCss/Story.css'
import { SentenceType, SentenceClickFcType, ReduxAllType } from './../../type/Type';
import { useAppSelector, useAppDispatch } from './../../app/store';
import { mainTabControl } from '../../app/action2/mainControllerSlice';
import { clickSentenceIdx } from '../../app/action2/clickSentenceDataSlice';
import { StorySentenceStyled } from '../../css/styled';
import EmptyPage from '../commonComponent/Empty';

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
            <div className='storyBox flex row'>
                {sentenceStoreSlice.length === 0 ? <EmptyPage pageNumber={1} /> : <>
                    {new Array(sentenceCounterSlice.paragraphCount).fill("").map((_, idxPara) =>
                        <p className='storyParagraph'
                            key={idxPara}>
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
                </>}
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

    return <StorySentenceStyled
        $expresstion={sentenceData.expression}
        onClick={() => sentenceClick(sentenceData)}>
        {sentenceData.content}
    </StorySentenceStyled>
}


export default StoryPage 