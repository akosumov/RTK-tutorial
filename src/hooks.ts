import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './app/store';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelectore = useSelector.withTypes<RootState>();
