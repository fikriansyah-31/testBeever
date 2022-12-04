import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  kanyeQuote: "",
  loading: false,
  error: false,
};

export const fetchKanyeQuote = createAsyncThunk("kanye/fetchKanyeQuote", async () => {
  const response = await axios.get("https://api.kanye.rest");
  return response.data.quote;
});
export const kanyeSlice = createSlice({
  name: "kanye",

  initialState,
  reducers: {
    selectKanyeQuote: (state, action) => {
      state.kanyeQuote = action.payload;
    },
  },
  extraReducers: {
    [fetchKanyeQuote.pending]: (state) => {
      state.loading = true;
    },
    [fetchKanyeQuote.fulfilled]: (state, action) => {
      state.loading = false;
      state.kanyeQuote = action.payload;
    },
  },
});
export const { selectKanyeQuote } = kanyeSlice.actions;

export default kanyeSlice.reducer;
