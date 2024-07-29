import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import sentenceStoreSliceReducer from './action1/sentenceStoreSlice';
import sentenceCounterSliceReducer from './action1/sentenceCounterSlice';
import footnoteConversionStoreSliceReducer from './action1/footnoteConversionStoreSlice';
import mainControllerSliceReducer from './action2/mainControllerSlice';
import clickSentenceDataSliceRedcer from './action2/clickSentenceDataSlice';
import historyOptionSliceRedcer from './action2/historyOptionSlice';

export const store = configureStore({
    reducer: {
        // Action 1
        sentenceStoreSlice: sentenceStoreSliceReducer,
        sentenceCounterSlice: sentenceCounterSliceReducer,
        footnoteConversionStoreSlice: footnoteConversionStoreSliceReducer,
        // Action 2
        mainControllerSlice: mainControllerSliceReducer,
        clickSentenceDataSlice: clickSentenceDataSliceRedcer,
        historyOptionSlice: historyOptionSliceRedcer

    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;