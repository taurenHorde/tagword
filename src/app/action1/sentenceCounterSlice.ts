import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SentenceCounterSliceType } from '../../type/Type';

const initialState: SentenceCounterSliceType =
{
    sentenceCount: 0,
    paragraphCount: 0,
    pageCount: 0
}

const sentenceCounterSlice = createSlice({
    name: 'sentenceSlice',
    initialState,
    reducers: {
        plusSentenceCount: (state) => {

        },
        plusParagraphCount: (state) => {

        }
    },
});

export const { plusSentenceCount, plusParagraphCount } = sentenceCounterSlice.actions;
export default sentenceCounterSlice.reducer;