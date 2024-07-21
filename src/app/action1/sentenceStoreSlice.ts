import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SentenceStoreSliceType } from '../../type/Type';

const initialState: SentenceStoreSliceType[] = [
    {
        no: 0,
        content: '우와아아아앙 투명드래곤이 울부 짖었다.',
        footnote: '투명드래곤은 크기가 2000미터가 넘었다!',
        expression: [10, 6, 3, 20],
        nickname: '드래곤아빠',
        password: 'pass',
        comments: 10,
        writeDate: '2024-07-20',
        paragraph: 1
    }
];

const sentenceStoreSlice = createSlice({
    name: 'sentenceSlice',
    initialState,
    reducers: {
        addSentence: (state, PayloadAction) => {
            state.push(PayloadAction.payload)
        }
    },
});

export const { addSentence } = sentenceStoreSlice.actions;
export default sentenceStoreSlice.reducer;