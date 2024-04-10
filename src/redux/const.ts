import { configureStore } from "@reduxjs/toolkit";
import addressReducer from "./modules/adress";
import locationReducer from "./modules/location";
const store = configureStore({
  reducer: {
    addressReducer,
    locationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
