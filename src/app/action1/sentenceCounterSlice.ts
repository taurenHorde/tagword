import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SentenceCounterSliceType } from '../../type/Type';

const initialState: SentenceCounterSliceType =
{
    _id: "",
    sentenceCount: 0,
    paragraphCount: 1,
    pageCount: 1,
    lastWords: ['일', '이', '삼'],
    newStart: true,
    title: '',
    topic: '',
    direction: '',
    books: 0,
    mode: true
    // 기본데이터
}

const sentenceCounterSlice = createSlice({
    name: 'sentenceSlice',
    initialState,
    reducers: {
        serverToCounter: (state, PayloadAction: PayloadAction<SentenceCounterSliceType>) => {
            const t = PayloadAction.payload.lastWords
            state._id = PayloadAction.payload._id
            state.sentenceCount = PayloadAction.payload.sentenceCount
            state.paragraphCount = PayloadAction.payload.paragraphCount
            state.pageCount = PayloadAction.payload.pageCount
            state.lastWords.length = 0;
            state.lastWords.push(...t)
            state.newStart = PayloadAction.payload.newStart
            state.mode = PayloadAction.payload.mode
        }
    },
});

export const { serverToCounter } = sentenceCounterSlice.actions;
export default sentenceCounterSlice.reducer;