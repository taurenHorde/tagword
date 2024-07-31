import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SentenceStoreSliceType } from '../../type/Type';

const initialState: SentenceStoreSliceType[] = [];


const sentenceStoreSlice = createSlice({
    name: 'sentenceSlice',
    initialState,
    reducers: {
        addExpression: (state, PayloadAction: PayloadAction<[number, number]>) => {
            // ['🤣', '🥹', '👍', '❤️'] expressionIdx
            const expressionIdx = PayloadAction.payload[0];
            const sentenceIdx = PayloadAction.payload[1];
            state[sentenceIdx - 1].expression[expressionIdx]++
        },
        removeExpression: (state, PayloadAction: PayloadAction<[number, number]>) => {
            // ['🤣', '🥹', '👍', '❤️'] expressionIdx
            const expressionIdx = PayloadAction.payload[0];
            const sentenceIdx = PayloadAction.payload[1];
            state[sentenceIdx - 1].expression[expressionIdx]--
        },
        serverToSentence: (state, PayloadAction: PayloadAction<SentenceStoreSliceType[]>) => {
            state.length = 0
            state.push(...PayloadAction.payload)
        }
    },
});

export const { addExpression, serverToSentence, removeExpression } = sentenceStoreSlice.actions;
export default sentenceStoreSlice.reducer;