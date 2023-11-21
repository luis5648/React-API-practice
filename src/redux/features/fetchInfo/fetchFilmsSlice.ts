import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Ifilms from "../../../interfaces/GhibliData";
import GhibliService from "../../../api/GhibliService";
/*
export interface apiInformation {
  id: string;
  title: string;
  original_title: string;
  description: string;
  image: string;
}
*/

interface filmsState {
  films: Ifilms[] | null;
  status: "idle" | "loading" | "failed" | "succeded";
  error: string | null;
}

//async thunk definition for fetch info with axios
export const fetchFilms = createAsyncThunk(
  "films/fetchFilms",
  async (ThunkAPI) => {
    const response = await GhibliService.getAll();
    //const response = await axios.get('https://ghibliapi.vercel.app/');
    const filmsData = await response.data;
    console.log("films: ", filmsData);
    return filmsData;
  }
);

const initialState: filmsState = {
  films: [] as Ifilms[],
  status: "idle",
  error: null,
};

export const filmsSlice = createSlice({
  name: "films",
  initialState,

  reducers: {
    /*
    getFilms(){},
    setFilms(state, {payload}){
      state.films = payload
    }, */
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })

      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.status = "succeded";
        state.films = action.payload;
      })

      .addCase(fetchFilms.rejected, (state, action) => {
        state.status = "failed";
        //state.error = action.error.message;
        state.error = "Error loading Data API ";
      });
  },
});

export default filmsSlice.reducer;
// eslint-disable-next-line no-empty-pattern
export const {} = filmsSlice.actions;

export const selectAllFilms = (state: filmsState) => state.films;
