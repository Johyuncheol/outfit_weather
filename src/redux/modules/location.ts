import { createSlice } from "@reduxjs/toolkit";
import { AddLocalStorage, GetLocalStorage } from "@/util/HandleLocalStorage";
import { dfs_xy_conv } from "@/util/ChageToGridMap";

interface locationState {
  x: number | null;
  y: number | null;
  latitude: number | null;
  longitude: number | null;
}

const storedLocation = GetLocalStorage("location");

const initialState: locationState = {
  x: storedLocation ? storedLocation.x : null,
  y: storedLocation ? storedLocation.y : null,
  latitude: storedLocation ? storedLocation.latitude : null,
  longitude: storedLocation ? storedLocation.longitude : null,
};

const locationSlice = createSlice({
  name: "locationReducer",
  initialState,
  reducers: {
    setLocation(state, actions) {
      const coordinate = dfs_xy_conv(
        "toXY",
        actions.payload.latitude,
        actions.payload.longitude
      );
      state.latitude = actions.payload.latitude;
      state.longitude = actions.payload.longitude;
      state.x = coordinate.x;
      state.y = coordinate.y;

      AddLocalStorage("location", {
        latitude: actions.payload.latitude,
        longitude: actions.payload.longitude,
        x: coordinate.x,
        y: coordinate.y,
      });
    },
  },
});

export const { setLocation } = locationSlice.actions;
export default locationSlice.reducer;
