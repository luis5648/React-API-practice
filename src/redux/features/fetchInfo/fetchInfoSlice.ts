
import { createSlice } from "@reduxjs/toolkit";
import Ifilms from "../../../interfaces/GhibliData";
import { useSelector, useDispatch } from "react-redux";
import { Interface } from "readline";

/*
export interface apiInformation {
  id: string;
  title: string;
  original_title: string;
  description: string;
  image: string;
}
*/

interface fetchFilmsPayload {
  data: Ifilms[];
}

interface fetchFilmRejectedPayload {
  error: string;
}

interface FilmsState {
  data:Films 
}

const initialState:  Ifilms = {
  data: [],
  status:'Idle',
  
}
export const fetchInfoSlice = createSlice({
    name: "films",
    initialState,
    reducers:{
        
    }
});


export default fetchInfoSlice.reducer