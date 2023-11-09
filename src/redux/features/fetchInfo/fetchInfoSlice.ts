
import { createSlice } from "@reduxjs/toolkit";
import IGhibliData from "../../../interfaces/GhibliData";

/*
export interface apiInformation {
  id: string;
  title: string;
  original_title: string;
  description: string;
  image: string;
}
*/

const initialState:  IGhibliData = {
  id: "",
  title: "",
  original_title: "",
  description: "", 
  image: "",
}
export const fetchInfoSlice = createSlice({
    name: "fetchInfo",
    initialState,
    reducers:{
        
    }
});


export default fetchInfoSlice.reducer