import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import sentenceStoreSliceReducer from './action1/sentenceStoreSlice';
import sentenceCounterSliceReducer from './action1/sentenceCounterSlice';

export const store = configureStore({
    reducer: {
        sentenceStoreSlice: sentenceStoreSliceReducer,
        sentenceCounterSlice: sentenceCounterSliceReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;