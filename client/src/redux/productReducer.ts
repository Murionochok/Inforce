import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "cards/fetchProducts",
  async () => {
    const data = await axios.get("http://localhost:4444/");
    return data;
  }
);

const initialState = {
  products: {
    items: [],
  },
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products.items = action.payload.data;
      })
      .addCase(fetchProducts.rejected, () => {
        console.log("error in product reducer");
      });
  },
});

export const productReducer = productSlice.reducer;
