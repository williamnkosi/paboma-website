import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import axios from "axios";

// Define a type for the slice state
interface UserState {
  user: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// Define the initial state using that type
const initialState: UserState = {
  user: {},
  status: "idle",
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetch", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
});

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchPosts.fulfilled, (state, action: any) => {
      state.status = "succeeded";
      state.user = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state, action: any) => {
      state.status = "failed";
      state.error = action.payload;
    });
  },
});

export const {} = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.user.user;

export default userSlice.reducer;
