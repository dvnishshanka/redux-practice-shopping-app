import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalPrice = action.payload.totalPrice;
      state.totalQuantity = action.payload.totalQuantity;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          total: newItem.price,
          quantity: 1,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.total += newItem.price;
      }
      state.totalQuantity++;
      state.totalPrice += newItem.price;
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      state.changed = true;
      if (state.totalQuantity > 0) state.totalQuantity--;
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.total -= existingItem.price;

        state.totalPrice -= existingItem.price;
      } else if (existingItem && existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);

        state.totalPrice -= existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
