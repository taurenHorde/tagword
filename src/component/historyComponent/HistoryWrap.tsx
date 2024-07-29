import './../../css/historyCss/HistoryWrap.css'
import { useAppSelector, useAppDispatch } from '../../app/store'
import { ReduxAllType, SentenceType, SentenceStoreSliceType } from '../../type/Type'
import { useEffect, useState } from 'react'
import { historyExtractFc } from '../../function/Conversion'
import { currentPage, pageMax } from '../../app/action2/historyOptionSlice'


function HistoryWarpPage(): JSX.Element {
    
    const dispatch = useAppDispatch();
    const sentenceStoreSlice = useAppSelector((state: ReduxAllType) => state.sentenceStoreSlice)
    const historyOptionSlice = useAppSelector((state: ReduxAllType) => state.historyOptionSlice)
    const [optionFiltered, setOptionFiltered] = useState<SentenceStoreSliceType[]>([])
    const [count, setCount] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        setLoading(false)
        const historyExtractResult = historyExtractFc(sentenceStoreSlice, historyOptionSlice)
        historyExtractResult.then((result) => {
            const { returnData, conversionedDataConunt } = result
            setOptionFiltered(returnData)
            setCount(conversionedDataConunt)
            setLoading(true)
        })
        dispatch(pageMax(Math.ceil(count / historyOptionSlice.viewNumber)))
    }, [historyOptionSlice, sentenceStoreSlice])

    const optionText1 = historyOptionSlice.paragraphOn ? `${historyOptionSlice.paragraphNumber}번 문단 ` : `전체 문단`
    const optionText2 = `${historyOptionSlice.viewNumber}개씩 보기`
    const pageArray = Array(historyOptionSlice.pageCount).fill("")

    return (
        <div className='HistoryWrapPage'>
            <div className='historyWrapHead flex row jc-space ai-center'>
                <div>
                    <p>{optionText1}ㆍ{optionText2}</p>
                </div>
                <div>
                    <p>총 {count}문장 중 {optionFiltered.length}개 [{historyOptionSlice.page}페이지]</p>
                </div>
            </div>
            <div className='historyWrapBody'>
                {loading ? <>
                    {optionFiltered.map((val, idx) =>
                        <HistoryBox
                            key={idx}
                            sentenceData={val}
                        />
                    )}
                </> : <>
                    <div>롸딩중</div>
                </>}
            </div>
            <div className='historyWrapFooter flex jc-center ai-center'>
                <div className='flex jc-center ai-center'>
                    <p> {`< 이전`} </p>
                    {pageArray.map((_, idx) => {
                        const style = {
                            color: historyOptionSlice.page === idx + 1 ? "black" : "gray",
                            fontWeight: historyOptionSlice.page === idx + 1 ? "bold" : "none"
                        }
                        return <p
                            key={idx}
                            style={style}
                            onClick={() => dispatch(currentPage(idx + 1))}
                        >{idx + 1}</p>
                    }
                    )}
                    <p> {`다음 >`} </p>
                </div>
            </div>
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