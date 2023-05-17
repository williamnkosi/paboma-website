import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import axios, { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { LoadingStatus } from "@/models/loading-status.enum";

interface ValidationErrors {
  errorMessage: string;
  field_errors: Record<string, string>;
}

// Define a type for the slice state
interface UserState {
  user: any;
  status: LoadingStatus;
  error: ErrorObject | null;
}

// Define the initial state using that type
const initialState: UserState = {
  user: {},
  status: LoadingStatus.idle,
  error: null,
};

export const signUpUser = createAsyncThunk(
  "user/createUser",
  async (userData: User, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/users/signup",
        userData
      );

      return response.data;
    } catch (error: any) {
      // We got validation errors, let's return those so we can reference in our component and set form errors
      return rejectWithValue(error.response.data);
    }
  }
);

export const signInUser = createAsyncThunk(
  "user/signInUser",
  async (creds: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/users/signin",
        creds
      );

      return response.data;
    } catch (error: any) {
      // We got validation errors, let's return those so we can reference in our component and set form errors
      return rejectWithValue(error.response.data);
    }
  }
);

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
    builder.addMatcher(
      (action) => action.type.startsWith("user"),
      (state) => {
        state.error = null;
        state.status = LoadingStatus.Loading;
      }
    );
    builder.addMatcher(
      (action) => action.type.endsWith("/fulfilled"),
      (state, action) => {
        state.status = LoadingStatus.succeeded;
        state.user = action.payload;
      }
    );
    builder.addMatcher(
      (action) => action.type.endsWith("/rejected"),
      (state, action) => {
        state.status = LoadingStatus.failed;
        state.error = action.payload;
        console.log(action.payload);
      }
    );
  },
});

export const {} = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUserData = (state: RootState) => state.user.user;
export const selectStatus = (state: RootState) => state.user.status;
export const selectError = (state: RootState) => state.user.error;
export default userSlice.reducer;
