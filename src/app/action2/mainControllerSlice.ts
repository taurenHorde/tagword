import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import {  } from '../../type/Type';

const initialState: any =
{
    tabControlNumber: 0
}

// tabControlNumber 는 book 이야기 페이지 내에서 사용되는 tab에 대한 데이터
// 0 - 모달이 꺼진 상태
// 1 - 모달이 켜진 상태 (문장추가하기 팝업)
// 2 - 모달이 켜진 상태 (현재 노출 된 문장들의 주석들 팝업)
// 3 - 모달이 켜진 상태 (문장에 대한 정보 팝업)
// 컨트롤은 MainPage (main.tsx) 와 StoryPage (story.tsx) 에서 제어 가능

const mainControllerSlice = createSlice({
    name: 'mainControllerSlice',
    initialState,
    reducers: {
        mainTabControl: (state, PayloadAction: PayloadAction<number>) => {
            console.log('tab' + PayloadAction.payload)
            state.tabControlNumber = PayloadAction.payload
        }
    },
});



export const { mainTabControl } = mainControllerSlice.actions;
export default mainControllerSlice.reducer;