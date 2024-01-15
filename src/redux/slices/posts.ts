import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { InitialState } from "../../types/types";

const url = "https://jsonplaceholder.typicode.com/posts";

export const fetchAllPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
});

export const fetchSinglePost = createAsyncThunk(
  "posts/fetchSinglePost",
  async (postId: string) => {
    const response = await fetch(`${url}/${postId}`);
    const data = await response.json();
    return data;
  }
);

const initialState: InitialState = {
  postsList: [],
  users: [],
  post: null,
  loading: true,
  error: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    sortPosts: (state, action: PayloadAction<string>) => {
      if (action.payload === "asc") {
        state.postsList.sort((a, b) => {
          if (a.id < b.id) {
            return -1;
          }
          if (a.id > b.id) {
            return 1;
          }
          return 0;
        });
      } else {
        state.postsList.sort((a, b) => {
          if (a.id < b.id) {
            return 1;
          }
          if (a.id > b.id) {
            return -1;
          }
          return 0;
        });
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch All Posts
      .addCase(fetchAllPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllPosts.fulfilled, (state, action) => {
        state.postsList = action.payload;
        state.loading = false;
        state.postsList.map((post) => {
          if (!state.users.includes(post.userId)) {
            state.users.push(post.userId);
          }
        });
      })
      .addCase(fetchAllPosts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })

      // Fetch Single Post
      .addCase(fetchSinglePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSinglePost.fulfilled, (state, action) => {
        state.post = action.payload;
        state.loading = false;
      })
      .addCase(fetchSinglePost.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { sortPosts } = postsSlice.actions;

export default postsSlice.reducer;
