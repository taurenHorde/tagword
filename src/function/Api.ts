import axios from 'axios'
import { MakeBookUserInputType, SentenceStoreSliceType, EditBookUserInputType, SentenceCounterSliceType } from '../type/Type'

export const makeSumbitPost = async (data: MakeBookUserInputType) => {
    // 새로운 소설 만들기 
    const result = await axios.post('/api/newbook', data)
    // const result = await axios.post('/newbook', data)
    return result.data
}
export const editSumbitPost = async (data: { editData: EditBookUserInputType, bookId: string | undefined }) => {
    const result = await axios.post('/api/editbook', data)
    // const result = await axios.post('/editbook', data)
    return result.data
}

export const closeSumbitPost = async (data: { bookId: string | undefined, password: string }) => {
    const result = await axios.post('/api/closebook', data)
    // const result = await axios.post('/closebook', data)
    return result.data
}

export const booksGet = async () => {
    const result = await axios.get('/api/books')
    // const result = await axios.get('/books')
    return result.data
}

export const expressionPost = async (data: { sentenceData: SentenceStoreSliceType, idx: number, params: string }) => {
    const result = await axios.post('/api/expression', { ...data })
    // const result = await axios.post('/expression', { ...data })
    return result.data
}


/// 서버에서 없앴음  apu