import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sentenceLoadingSliceType } from '../../type/Type';





const initialState: sentenceLoadingSliceType = {
    setenceFirstGetLoading: false
};


const sentenceLoadingSlice = createSlice({
    name: 'sentenceSlice',
    initialState,
    reducers: {
        socketGetLoadingTrue: (state) => {
            state.setenceFirstGetLoading = true
        },
        socketGetLoadingFalse: (state) => {
            state.setenceFirstGetLoading = false
        }
    },
});

export const { socketGetLoadingTrue, socketGetLoadingFalse } = sentenceLoadingSlice.actions;
export default sentenceLoadingSlice.reducer;