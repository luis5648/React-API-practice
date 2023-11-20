import { configureStore } from "@reduxjs/toolkit";
//import filmsSliceReducer from "./features/fetchInfo/fetchFilmsSlice";
import { filmsSlice } from "./features/fetchInfo/fetchFilmsSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const Store = configureStore({
    reducer: {
        films: filmsSlice.reducer,
    },
});


//export default Store;
export type RootState = ReturnType<typeof Store.getState>;
export const useAppDispatch: () => typeof Store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


