import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 0, name: "Prabesh Magar" },
  { id: 1, name: "David Young" },
  { id: 2, name: "Heinrich Kohl" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
