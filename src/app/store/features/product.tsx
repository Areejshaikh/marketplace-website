import { products } from '@/components/utils/mock';
import { Product } from '@/components/utils/types';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch products from Sanity
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const fetchedProducts = await products();
  return fetchedProducts; // Return the fetched products
});

// Define the initial state
const initialState: Product[] = [];

// Create the slice
export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload; // Replace the state with fetched products
    });
  },
});

// Export the reducer
export default productSlice.reducer;
