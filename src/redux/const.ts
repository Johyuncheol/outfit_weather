import { configureStore } from "@reduxjs/toolkit";
import addressReducer from "./modules/adress";
import locationReducer from "./modules/location";
import userReducer from "./modules/user";
import tempReducer from "./modules/weather";
import rerenderReducer from "./modules/reRender";

const store = configureStore({
  reducer: {
    addressReducer,
    locationReducer,
    userReducer,
    tempReducer,
    rerenderReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
