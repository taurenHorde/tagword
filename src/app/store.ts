import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import sentenceActionSliceReducer from './action1/sentenceActionSlice';
import sentenceStoreSliceReducer from './action1/sentenceStoreSlice';

export const store = configureStore({
    reducer: {
        sentenceActionSlice: sentenceActionSliceReducer,
        sentenceStoreSlice: sentenceStoreSliceReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;