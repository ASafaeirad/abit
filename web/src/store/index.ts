import { configureStore } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook} from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import editorSlice from './editor';

export const store = configureStore({
  reducer: editorSlice,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = useDispatch<AppDispatch>; // eslint-disable-line
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
