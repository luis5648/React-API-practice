import { createSlice } from "@reduxjs/toolkit";
import Ifilms from "../../../interfaces/GhibliData";
/*`
export interface apiInformation {
  id: string;
  title: string;
  original_title: string;
  description: string;
  image: string;
}
*/

interface filmsState {
  films: Ifilms[] |null;
  status: "idle" | "loading" | "failed" | "succeded"
  error: string |null
}

/*

//async thunk definition for fetch info with axios
export const fetchFilms = createAsyncThunk("films/fetchFilms", async (ThunkAPI) => {
  const response = await GhibliService.getAll();
  const filmsData = await response.data;
  console.log("films: ",filmsData);
  return filmsData;
})

*/
const initialState: filmsState = {
  films: [] as Ifilms[],
  status: "idle",
  error: null

};


export const filmsSlice = createSlice ({
  name: "films",
  initialState,
    
  reducers:{
  fetchFilmsSuccess(state, action){
    state.films = action.payload;
    state.status = "succeded";
  },
  fetchFilmsFailure(state, action){
    state.status = "failed";
    state.error = action.payload;
  },
  },

/*
  extraReducers: (builder) => { 
  builder
  .addCase(fetchFilms.pending,(state) =>{

    state.status = "loading";
    state.error = null
  })
  
  .addCase(fetchFilms.fulfilled, (state, action) =>{
    state.status = "succeded";
    state.films = action.payload;
  })

  .addCase(fetchFilms.rejected, (state, action) =>{
    state.status = "failed";
    //state.error = action.error.message;
     
  })
  }
*/

});


export default filmsSlice.reducer
export const {fetchFilmsFailure, fetchFilmsSuccess} = filmsSlice.actions;
export const selectAllFilms = (state: filmsState) => state.films;