import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { tabControlNumber: number } =
{
    tabControlNumber: 0
}

const mainControllerSlice = createSlice({
    name: 'mainControllerSlice',
    initialState,
    reducers: {
        mainTabControl: (state, PayloadAction: PayloadAction<number>) => {
            state.tabControlNumber = PayloadAction.payload
        }
    },
});

export const { mainTabControl } = mainControllerSlice.actions;
export default mainControllerSlice.reducer;
// tabControlNumber 는 book 이야기 페이지 내에서 사용되는 tab에 대한 데이터