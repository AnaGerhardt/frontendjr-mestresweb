import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Auth = {
  token?: string;
};

const initialState: Partial<Auth> = {};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    auth: (state, action: PayloadAction<Partial<Auth>>) => action.payload,
  },
});

export const { auth } = authSlice.actions;
export default authSlice.reducer;
