import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios.defaults.baseURL = "https://6504d72cc8869921ae257bad.mockapi.io/cars";
const errorMessage=`Something is wrong`

export const fetchAdverts = createAsyncThunk(
    "cars/fetchAllByPage",
    async ({page}, thunkAPI) => {
      try {
        const url=`/cars?completed=false&page=${page}&limit=8`
        const response = await axios.get(url);
        return response.data;
    
      } catch (e) {
        return thunkAPI.rejectWithValue(`${errorMessage}`);
      }
    }
  );