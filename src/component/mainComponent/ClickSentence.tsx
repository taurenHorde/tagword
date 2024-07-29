import './../../css/mainCss/ClickSentence.css'
import { useAppSelector, useAppDispatch } from './../../app/store';
import { ReduxAllType } from './../../type/Type';


function ClickSenctencePage(): JSX.Element {

    const dispatch = useAppDispatch();
    const clickSentenceStoreSlice = useAppSelector((state: ReduxAllType) => state.clickSentenceDataSlice)

    return (
        <div className='ClickSentencePageWrap flex column jc-start ai-start'>
            <div className='clickSentenceContent flex row jc-start ai-center'>
                <p>{clickSentenceStoreSlice.content}</p>
            </div>
            <div className='clickSentenceExpression flex row ai-center'>
                {['🤣', '🥹', '👍', '❤️'].map((val, idx) => <div key={idx}
                // onClick={() => expressionClickFc(idx)}
                >
                    {val}   {clickSentenceStoreSlice.expression[idx]}
                </div>
                )}
                <div>
                    💬   {clickSentenceStoreSlice.comments}
                </div>
            </div>
            <div className='clickSentenceInfo flex row ai-center'>
                {['닉네임', '등록일'].map((val, idx) => {
                    const dataValue = [clickSentenceStoreSlice.nickname, clickSentenceStoreSlice.writeDate]
                    return <div key={idx}><p> {dataValue[idx]}</p></div>
                })}
                <div><p className='clickSentenceLinkTo'>기록페이지에서</p></div>
            </div>
        </div>
    )
}


// const expressionClickFc = (expressionIdx: number) => {
//     dispatch(addExpression([expressionIdx, modalDataIndex]))
// };




export default ClickSenctencePage