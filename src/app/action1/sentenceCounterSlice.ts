import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SentenceCounterSliceType } from '../../type/Type';

const initialState: SentenceCounterSliceType =
{
    sentenceCount: 1,
    paragraphCount: 1,
    pageCount: 1,
    lastWords: ['화', '난', '다'],
    newStart: false
}

const sentenceCounterSlice = createSlice({
    name: 'sentenceSlice',
    initialState,
    reducers: {
        plusSentenceCount: (state) => {
            state.sentenceCount += 1;
        },
        plusParagraphCount: (state) => {
            state.paragraphCount += 1;
        },
        lastWordsChange: (state, PayloadAction: PayloadAction<string>) => {
            // const regex = /[가-힣]+/g
            // const afterMatch = PayloadAction.payload.match(regex);
            // const afterJoin = afterMatch ? afterMatch.join('') : '';
            // const stirngLengt = afterJoin.length;
            // for (var i = 0; i > 0; i--) {

            // }

        },
        lastWordsReset: (state, PayloadAction: PayloadAction<boolean>) => {
            state.newStart = PayloadAction.payload
        }
    },
});

export const { plusSentenceCount, plusParagraphCount, lastWordsChange, lastWordsReset } = sentenceCounterSlice.actions;
export default sentenceCounterSlice.reducer;