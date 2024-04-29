import { createSlice } from "@reduxjs/toolkit";
import {
  AddSessionStorage,
  RemoveSessionStorage,
} from "@/util/HandleSessionStorage";

interface userState {
  nickname: string | null;
}

const initialState: userState = { nickname: null };

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser(state, actions) {
      state.nickname = actions.payload;
      AddSessionStorage("nickname", actions.payload);
    },
    DeleteUser(state) {
      state.nickname = "";
      RemoveSessionStorage("nickname");
    },
  },
});

export const { setUser, DeleteUser } = userSlice.actions;
export default userSlice.reducer;
