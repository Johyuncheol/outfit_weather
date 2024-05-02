import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reRender: false
};

const reRenderSlice = createSlice({
  name: "reRenderReducer",
  initialState,
  reducers: {
    setRerender(state) {
      state.reRender = !state.reRender
    },
  },
});

export const { setRerender } = reRenderSlice.actions;
export default reRenderSlice.reducer;
