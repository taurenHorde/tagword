import axios from 'axios'
import { MakeBookUserInputType } from '../type/Type'


export const makeSumbitPost = async (data: MakeBookUserInputType) => {
    // 새로운 소설 만들기 
    const result = await axios.post('/api/newbook', data)
    return result.data
}


export const booksGet = async () => {
    const result = await axios.get('/api/books')
    return result.data
}