import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "./app-hooks";

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

export const fetchPosts = createAsyncThunk("user/createUser", async () => {
  const userData: User = {
    firstName: "reduxTesting,",
    lastName: "reduxTesting lastName",
    userName: "reduxTe",
    phoneNumber: "6152918273",
    email: "reduxTesting@gmail.com",
    password: "testing123",
  };
  const response = await axios.post(
    "http://new-testing-env.eba-hxtazzug.us-east-1.elasticbeanstalk.com/users/signup",
    userData
  );
  console.log(response);
  return response.data;
});

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    saveUserData: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
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
      console.log(action.payload);
    });
  },
});

export const {} = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.user.user;

export default userSlice.reducer;
