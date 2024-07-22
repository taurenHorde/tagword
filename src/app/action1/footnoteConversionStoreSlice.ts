import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FootnoteExtractFcReturnType } from '../../type/Type';


const initialState: FootnoteExtractFcReturnType[] = [];
const footnoteConversion = createSlice({
    name: 'footnoteConversion',
    initialState,
    reducers: {
        inputConversionData: (state, PayloadAction: PayloadAction<FootnoteExtractFcReturnType[]>) => {
            const t = PayloadAction.payload
            state.length = 0;
            state.push(...t)
        }
    },
});

export const { inputConversionData } = footnoteConversion.actions;
export default footnoteConversion.reducer;