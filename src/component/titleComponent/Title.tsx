import '../../css/titleCss/Title.css'
import { useEffect, useState } from 'react'
import { MakeBookCheckFcType, SentenceCounterSliceType } from './../../type/Type'
import { useMutation } from 'react-query'
import { booksGet } from './../../function/Api'
import TitlePageInfo from './TitleInfo'
import TitlePageBookBox from './TitleBook'
import TitlePageMakeBook from './TitleMakeBook'
import LoadingPage from '../commonComponent/Loading'
import EmptyPage from '../commonComponent/Empty'
import ErrorPage from '../commonComponent/Error'

function TitlePage(): JSX.Element {

    const [revice, setRecive] = useState<boolean>(false)
    const [bookData, setBookData] = useState<SentenceCounterSliceType[]>();
    const booksGetMutation = useMutation(booksGet, {
        onSuccess: (data) => {
            setBookData(data.books)
        },
        onError: (error) => {
            console.log('작동에러')
            console.log(error)
        }
    })
    const makeBookCheckFc: MakeBookCheckFcType = () => {
        setRecive(pre => !pre)
    }
    useEffect(() => {
        booksGetMutation.mutate();
    }, [revice])


    return <div className='TitlePageWrap'>
        <div className='titlePageBox flex column jc-start ai-center'>
            <TitlePageInfo />
            <TitlePageMakeBook makeBookCheckFc={makeBookCheckFc} />
            {booksGetMutation.isLoading && < LoadingPage />}
            {booksGetMutation.isSuccess && <>

                {bookData?.length === 0 ?
                    <EmptyPage pageNumber={0} />
                    : <div className='titleBooksContain'>
                        {bookData?.map((val, idx) =>
                            <TitlePageBookBox key={idx} bookData={val} makeBookCheckFc={makeBookCheckFc} />
                        )}
                    </div>}
            </>}
            {booksGetMutation.isError && <ErrorPage />}
        </div>
    </div>
}




export default TitlePage
