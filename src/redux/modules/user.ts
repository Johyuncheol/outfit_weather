import { createSlice } from "@reduxjs/toolkit";
import {
  AddSessionStorage,
  GetSessionStorage,
  RemoveSessionStorage,
} from "@/util/HandleSessionStorage";

interface userState {
  nickname: string;
}

const user = GetSessionStorage("nickname");
console.log(user);
const initialState: userState = { nickname: user } || { nickname: null };
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser(state, actions) {
      state.nickname = actions.payload;
      AddSessionStorage("nickname", actions.payload);
    },
    DeleteUser(state, actions) {
      state.nickname = "";
      RemoveSessionStorage("nickname");
    },
  },
});

export const { setUser, DeleteUser } = userSlice.actions;
export default userSlice.reducer;
