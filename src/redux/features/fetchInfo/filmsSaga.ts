import { AxiosResponse } from "axios";
import {takeLatest,call, put} from "redux-saga/effects"
import axiosCall from "../../../api/axiosCall";
import { fetchFilmsFailure, fetchFilmsSuccess } from "./fetchFilmsSlice";
//import fetchFilms from "./fetchFilmsSlice"

function* fetchFilmsSaga(){
    try{
        const response: AxiosResponse = yield call(
           axiosCall,
           "https://ghibliapi.vercel.app/films",
           null,
           {"Content-Type": "application/json"},
            "GET"
        );
        if (response.status === 200 ){
            yield put(fetchFilmsSuccess(response.data));
        }
    }catch(error){
        yield put(fetchFilmsFailure(error))
    }
}

export function* filmsSaga(){
    yield takeLatest(fetchFilmsSuccess.type, fetchFilmsSaga);
}