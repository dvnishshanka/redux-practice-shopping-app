import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "uiSlice",
  initialState: {
    isCartVisible: true,
    notification: null,
  },
  reducers: {
    toggleCartVisibility(state) {
      state.isCartVisible = !state.isCartVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export default uiSlice.reducer;

export const uiSliceActions = uiSlice.actions;
