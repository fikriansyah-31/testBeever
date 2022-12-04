
import {useDispatch, useSelector} from 'react-redux';
import { RootState } from './hook';

export const useAppDispatch = () => useDispatch();
export const useAppSelector = TypedUseSelectorHook(RootState) = useSelector;