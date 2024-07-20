import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SentenceActionSliceType } from '../../component/Type';

const initialState: SentenceActionSliceType[] = [
    {
        no: 0,
        content: '우와아아아앙 투명드래곤이 울부 짖었다.',
        footnote: '투명드래곤은 크기가 2000미터가 넘었다!',
        expression: [10, 6, 3, 20],
        nickname: '드래곤아빠',
        password: 'pass',
        sentence: 1,
        comments: 10,
        writeDate: '2024-07-20',
        paragraph: 1
    }
];

const sentenceActionSlice = createSlice({
    name: 'sentenceSlice',
    initialState,
    reducers: {
        insertSentence: (state) => {

        }
    },
});

export const { insertSentence } = sentenceActionSlice.actions;
export default sentenceActionSlice.reducer;