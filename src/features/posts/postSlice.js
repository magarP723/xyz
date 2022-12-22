import {
  createSlice,
  nanoid,
  current,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};
// const initialState = [
//   {
//     id: 1,
//     title: "Learning Redux Toolkit",
//     content: "This is the content here.",
//   },
//   {
//     id: 2,
//     title: "More Topics here",
//     content: "More content on different topics",
//   },
//   {
//     id: 3,
//     title: "More Topics here",
//     content: "More content on different topics",
//   },
// ];

export const fetchData = createAsyncThunk("user/data", async () => {
  try {
    const response = await axios.get("https://opentdb.com/api_category.php");

    return response;
  } catch (err) {
    return err;
  }
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // postAdded: {
    //   reducer(state, action) {
    //     state.push(action.payload);
    //   },
    //   prepare(title, content, userId) {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         title,
    //         content,
    //         userId,
    //       },
    //     };
    //   },
    // },
    // postDelete: {
    //   reducer(state, action) {
    //     return current(state).filter((k) => k.id !== action.payload);
    //   },
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "success";
        // state.data.push(action.payload);
        state.data.concat(action.payload);
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      });
  },
});
export const selectAllPosts = (state) => state.posts;
export const getDataStatus = (state) => state.posts.status;
export const getDataError = (state) => state.posts.error;
export const getData = (state) => state.posts.fetchData;
export const { postAdded, postDelete } = postsSlice.actions;
export default postsSlice.reducer;
