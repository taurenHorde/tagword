import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SentenceStoreSliceType } from '../../component/Type';

const initialState: SentenceStoreSliceType =
{
    sentenceCount: 0,
    paragraphCount: 0,
    pageCount: 0
}

const sentenceStoreSlice = createSlice({
    name: 'sentenceSlice',
    initialState,
    reducers: {
        insertSentence: (state) => {

        }
    },
});

export const { insertSentence } = sentenceStoreSlice.actions;
export default sentenceStoreSlice.reducer;