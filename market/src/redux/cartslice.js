import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("fetchData", async () => {
  const response = await fetch("https://api.escuelajs.co/api/v1/products");
  return response.json();
});
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    userCart: [],
    data: null,
    price: 0,
    error: false,
    cartSize: 0,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.error = true;
      console.log(action.payload);
    });
  },
  reducers: {
    addItem: (state, action) => {
      state.userCart.push(action.payload);
      state.price += action.payload.price;
      state.cartSize += 1;
    },
    removeItem: (state, action) => {
      console.log(action.payload);
      const index = state.userCart.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(action.payload.id);
      console.log(index);
      if (index >= 0) {
        state.userCart.splice(index, 1);
        state.cartSize -= 1;
        state.price -= action.payload.price;
        alert(`The item ${action.payload.name} is removed`);
      } else {
        alert(`The item ${action.payload.name} was not in the cart`);
      }
    },
  },
});
export default cartSlice.reducer;
export const { addItem, removeItem } = cartSlice.actions;
