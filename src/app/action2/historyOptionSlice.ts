import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { historyOptionSliceType } from '../../type/Type';


const initialState: historyOptionSliceType = {
    paragraphOn: false,  // false = 문단 전체보기 / true = 문단 option on
    paragraphNumber: 0, // 몇번 째 문단볼껀지... 

    viewNumber: 10, // 값은 10 / 25 / 50  고정 (Type지정) / 문장 몇개씩 볼껀지 / 기본값은 10

    searchOn: false,
    searchType: 0,//  1- 닉네임  2- 문장내용  3- 메모 내용
    searchText: "", // 검색 텍스트

    page: 1,
    pageCount: 1
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
        currentPage: (state, PayloadAction: PayloadAction<number>) => {
            state.page = PayloadAction.payload
        },
        pageMax: (state, PayloadAction: PayloadAction<number>) => {
            state.pageCount = PayloadAction.payload
        },

    },
});



export const { paragraphOption, viewOption, searchOption, searchText, currentPage, pageMax } = historyOptionSlice.actions;
export default historyOptionSlice.reducer;