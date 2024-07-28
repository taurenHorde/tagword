import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SentenceStoreSliceType } from '../../type/Type';




const initialState: SentenceStoreSliceType =
{
    _id: 'defalut',
    content: '',
    nickname: '',
    password: '',
    no: 0,
    expression: [0, 0, 0, 0],
    comments: 0,
    writeDate: '',
    paragraph: 0
}


const clickSentenceDataSlice = createSlice({
    name: 'titleControllerSlice',
    initialState,
    reducers: {
        clickSentenceIdx: (state, PayloadAction: PayloadAction<SentenceStoreSliceType>) => {
            Object.assign(state, PayloadAction.payload)
        }
    },
});



export const { clickSentenceIdx } = clickSentenceDataSlice.actions;
export default clickSentenceDataSlice.reducer;