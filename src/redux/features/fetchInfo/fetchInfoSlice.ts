
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
  data: Ifilms[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null; 
}

export const filmsSlice = createSlice({
    name: "films",
    initialState: {
      data: [],
      status: 'idle',
      error: 'null'
    } as FilmsState,
    reducers:{
        
    }
});


export default filmsSlice.reducer