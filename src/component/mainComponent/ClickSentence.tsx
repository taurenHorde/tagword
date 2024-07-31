import './../../css/mainCss/ClickSentence.css'
import { useAppSelector, useAppDispatch } from './../../app/store';
import { ReduxAllType, ExpressionClickFc, SentenceStoreSliceType } from './../../type/Type';
import { useMutation } from 'react-query'
import { expressionPost } from '../../function/Api'
import { useParams } from 'react-router-dom';
import { addExpression, removeExpression } from '../../app/action1/sentenceStoreSlice';
import { addExpressionT, removeExpressionT } from '../../app/action2/clickSentenceDataSlice'

function ClickSenctencePage(): JSX.Element {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const clickSentenceStoreSlice = useAppSelector((state: ReduxAllType) => state.clickSentenceDataSlice)

    const mutation = useMutation(
        (data: { sentenceData: SentenceStoreSliceType, idx: number, params: string }) => expressionPost(data), {
        onSuccess: (data) => { },
        onError: (error, data) => {
            dispatch(removeExpression([data.idx, data.sentenceData.no]))
            dispatch(removeExpressionT([data.idx, data.sentenceData.no]))
            alert('감정표현 클릭이 실패 하였습니다. 잠시 후 다시 시도해주시길 바랍니다.')
        }
    })
    const expressionClickFc: ExpressionClickFc = (sentenceData, idx) => {
        if (!id) return;
        mutation.mutate({ sentenceData: sentenceData, idx: idx, params: id })
        dispatch(addExpression([idx, sentenceData.no]))
        dispatch(addExpressionT([idx, sentenceData.no]))
    }

    return (
        <div className='ClickSentencePageWrap flex column jc-start ai-start'>
            <div className='clickSentenceContent flex row jc-start ai-center'>
                <p>{clickSentenceStoreSlice.content}</p>
            </div>
            <div className='clickSentenceExpression flex row ai-center'>
                {['🤣', '🥹', '👍', '❤️'].map((val, idx) => <div key={idx}
                    onClick={() => expressionClickFc(clickSentenceStoreSlice, idx)}
                >
                    {val}   {clickSentenceStoreSlice.expression[idx]}
                </div>
                )}
                {/* <div>
                    💬   {clickSentenceStoreSlice.comments}
                </div> */}
            </div>
            <div className='clickSentenceInfo flex row ai-center'>
                {['닉네임', '등록일'].map((val, idx) => {
                    const dataValue = [clickSentenceStoreSlice.nickname, clickSentenceStoreSlice.writeDate]
                    return <div key={idx}><p> {dataValue[idx]}</p></div>
                })}
                {/* <div><p className='clickSentenceLinkTo'>기록페이지에서</p></div> */}
            </div>
        </div>
    )
}







export default ClickSenctencePage