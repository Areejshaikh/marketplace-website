import { cart } from '@/components/utils/types';
import { createSlice } from '@reduxjs/toolkit'



// Define the initial state using that type
const initialState: cart[] = []


export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Add to cart functionallty  State
    addToCart(state, action) {
      let uniqueId = Math.floor(1000 + Math.random() * 9000);
      let newobj = { ...action.payload, uniqueId }
      state.push(newobj)
    },

  // delete Item
    
   
  deleteItem(state, { payload }) {
    return state.filter((val) => val.uuid !== payload);
  },
    
    // Add to Cart

    addCart(state, action) {
      let obj = state.find(
        (val) =>
          val._id == action.payload._id &&
          val.colors == action.payload.colors &&
          val.sizes == action.payload.sizes
      );
      if (obj) {
        ++obj.quantity;
        let newState = state.filter
        ((val) => val._id !== obj?._id);
        state = [...newState, obj]
        return;
      }
    },

    // lessCart

    lessCart(state, action) {
      let obj = state.find(
        (val) =>
          val._id == action.payload._id &&
          val.colors == action.payload.colors &&
          val.sizes == action.payload.sizes
      );
      if (obj !== undefined) {
        if(obj.quantity <= 1) {
          return state.filter
          ((val) => val.uuid !== obj?.uuid);
        }
        --obj.quantity;
        let newState = state.filter
         ((val) => val.uuid == obj?.uuid);
        state = [...newState, obj];
        return;
      }
    }
  },
})

export let { addToCart, deleteItem, addCart ,lessCart } = cartSlice.actions



export default cartSlice.reducer