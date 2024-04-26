import { createSlice } from "@reduxjs/toolkit";
import { AddLocalStorage, GetLocalStorage } from "@/util/HandleLocalStorage";

interface addresseState {
  temp: number | null;
}

const initialState: addresseState = {
  temp: null,
};

const tempSlice = createSlice({
  name: "tempReducer",
  initialState,
  reducers: {
    setTemp(state, actions) {
      state.temp = actions.payload;
      AddLocalStorage("temp", actions.payload);
    },
  },
});

export const { setTemp } = tempSlice.actions;
export default tempSlice.reducer;
