import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { historyOptionSliceType } from '../../type/Type';


const initialState: historyOptionSliceType = {
    paragraphOn: false,  
    paragraphNumber: 0, 
    viewNumber: 10, 
    searchOn: false,
    searchType: 0,
    searchText: "", 
}
const historyOptionSlice = createSlice({
    name: 'titleControllerSlice',
    initialState,
    reducers: {
        paragraphOption: (state, PayloadAction: PayloadAction<number>) => {
            state.paragraphNumber = PayloadAction.payload
            state.paragraphOn = PayloadAction.payload === 0 ? false : true
        },
        viewOption: (state, PayloadAction: PayloadAction<number>) => {
            if (PayloadAction.payload === 10 || PayloadAction.payload === 25 || PayloadAction.payload === 50) {
                state.viewNumber = PayloadAction.payload
            }
        },
        searchOption: (state, PayloadAction: PayloadAction<number>) => {
            state.searchType = PayloadAction.payload
            state.searchOn = true
        },
        searchText: (state, PayloadAction: PayloadAction<string>) => {
            state.searchText = PayloadAction.payload
        },
        resetOption: (state) => {
            state.paragraphOn = false
            state.paragraphNumber = 0
            state.viewNumber = 10
            state.searchOn = false
            state.searchType = 0
            state.searchText = ""
            // 기본값
        },

    },
});



export const { paragraphOption, viewOption, searchOption, searchText, resetOption } = historyOptionSlice.actions;
export default historyOptionSlice.reducer;