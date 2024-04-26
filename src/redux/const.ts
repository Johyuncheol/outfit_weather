import { configureStore } from "@reduxjs/toolkit";
import addressReducer from "./modules/adress";
import locationReducer from "./modules/location";
import userReducer from "./modules/user";
import tempReducer from "./modules/weather";

const store = configureStore({
  reducer: {
    addressReducer,
    locationReducer,
    userReducer,
    tempReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
