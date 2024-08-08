import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  prod1:0,
  prod1Amt:1000,
  prod2:0,
  prod2Amt:1500,
  status: 'idle',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addProd1:(state, action)=>{
      state.prod1 += action.payload[0];
      state.prod1Amt += action.payload[1];
    },
    addProd2:(state, action)=>{
      state.prod2 += action.payload[0];
      state.prod2Amt += action.payload[1];
    }
  }
});

export const { increment, decrement, incrementByAmount, addProd1, addProd2 } = counterSlice.actions;


export const addProduct1 = (state) => state.counter.prod1;
export const addProduct2 = (state) => state.counter.prod2;

export default counterSlice.reducer;
