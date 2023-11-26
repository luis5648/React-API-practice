import { combineReducers, configureStore } from "@reduxjs/toolkit";
//import filmsSliceReducer from "./features/fetchInfo/fetchFilmsSlice";
import { filmsSlice } from "./features/fetchInfo/fetchFilmsSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

//saga imports
import createSagaMiddleware from "redux-saga"
import { filmsSaga } from "./features/fetchInfo/filmsSaga";

const RootReducer = combineReducers({
    films: filmsSlice.reducer,
})


const sagaMiddleware = createSagaMiddleware();
export const Store = configureStore({
    reducer: {
       RootReducer 
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(filmsSaga);
//export default Store;
export default Store
export type RootState = ReturnType<typeof Store.getState>;
export const useAppDispatch: () => typeof Store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


