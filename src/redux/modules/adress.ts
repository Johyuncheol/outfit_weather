import { createSlice } from "@reduxjs/toolkit";
import { AddLocalStorage, GetLocalStorage } from "@/util/HandleLocalStorage";

interface addresseState {
  address: string | null;
}

const initialState: addresseState = {
  address: null,
};

const addressSlice = createSlice({
  name: "addressReducer",
  initialState,
  reducers: {
    setAddress(state, actions) {
      state.address = actions.payload;
      AddLocalStorage("address", actions.payload);
    },
  },
});

export const { setAddress } = addressSlice.actions;
export default addressSlice.reducer;
