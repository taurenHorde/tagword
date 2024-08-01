import axios from 'axios'
import { MakeBookUserInputType, SentenceStoreSliceType, EditBookUserInputType, SentenceCounterSliceType } from '../type/Type'

export const makeSumbitPost = async (data: MakeBookUserInputType) => {
    // 새로운 소설 만들기 
    const result = await axios.post('/api/newbook', data)
    return result.data
}
export const editSumbitPost = async (data: { editData: EditBookUserInputType, bookId: string | undefined }) => {
    const result = await axios.post('/api/editbook', data)
    return result.data
}

export const closeSumbitPost = async (data: { bookId: string | undefined, password: string }) => {
    const result = await axios.post('/api/closebook', data)
    return result.data
}

export const booksGet = async () => {
    const result = await axios.get('/api/books')
    return result.data
}

export const expressionPost = async (data: { sentenceData: SentenceStoreSliceType, idx: number, params: string }) => {
    const result = await axios.post('/api/expression', { ...data })
    return result.data
}