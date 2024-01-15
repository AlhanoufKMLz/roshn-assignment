import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { Post } from "../../types/types"

type InitialState = {
  postsList: Post[]
  loading: boolean
  error: null | string
};

const initialState: InitialState = {
  postsList: [],
  loading: true,
  error: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getAllPostsSucsses: (state, action: PayloadAction<Post[]>) => {
      state.loading = false
      state.postsList = action.payload
    },
    getAllPostsFail: (state, action: PayloadAction<Post>) => {
      state.loading = false
      //state.error = action.payload.message
    },
    sortPosts: (state, action: PayloadAction<string>) => {
      if (action.payload === "asc") {
        state.postsList.sort((a, b) => {
          if (a.id < b.id) {
            return -1
          }
          if (a.id > b.id) {
            return 1
          }
          return 0
        });
      } else {
        state.postsList.sort((a, b) => {
          if (a.id < b.id) {
            return 1
          }
          if (a.id > b.id) {
            return -1
          }
          return 0
        });
      }
    },
  },
});


export const { getAllPostsSucsses, getAllPostsFail, sortPosts } = postsSlice.actions

export default postsSlice.reducer