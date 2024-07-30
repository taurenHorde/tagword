import './../../css/mainCss/ClickSentence.css'
import { useAppSelector, useAppDispatch } from './../../app/store';
import { ReduxAllType, ExpressionClickFcType } from './../../type/Type';
import { useMutation } from 'react-query'
import { expressionPost } from '../../function/Api'
import { useParams } from 'react-router-dom';
import { addExpression } from '../../app/action1/sentenceStoreSlice';
import { isNumberArrayLengthTwo } from '../../type/TypeGuards';

function ClickSenctencePage(): JSX.Element {

    const { id } = useParams();
    const dispatch = useAppDispatch();
    const clickSentenceStoreSlice = useAppSelector((state: ReduxAllType) => state.clickSentenceDataSlice)
    const mutation = useMutation(expressionPost, {
        onSuccess: (data) => {
            console.log(data)
            const dispatchApplicationData = data.updateDBInfo
            if (isNumberArrayLengthTwo(dispatchApplicationData)) {
                dispatch(addExpression([...dispatchApplicationData]))
            }
        },
        onError: (error) => {
            console.log(error)
        }
    })


    const expressionClickFc: ExpressionClickFcType = (sentenceData, idx) => {
        if (!id) return; // 문제있다리
        mutation.mutate({ sentenceData: sentenceData, idx: idx, params: id })
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







export default ClickSenctencePage