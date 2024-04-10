import { createSlice } from "@reduxjs/toolkit";
import { AddLocalStorage, GetLocalStorage } from "@/lib/HandleLocalStorage";

interface addresseState {
  address: string | null;
}

const initialState: addresseState = {
  address: GetLocalStorage("address") || "",
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
