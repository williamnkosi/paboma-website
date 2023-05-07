import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import axios, { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "./app-hooks";

interface ValidationErrors {
  errorMessage: string;
  field_errors: Record<string, string>;
}

// Define a type for the slice state
interface UserState {
  user: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: ErrorObject | null;
}

// Define the initial state using that type
const initialState: UserState = {
  user: {},
  status: "idle",
  error: null,
};

export const signUpUser = createAsyncThunk(
  "user/createUser",
  async (_, { rejectWithValue }) => {
    const userData: User = {
      firstName: "reduxTesting,",
      lastName: "reduxTesting lastName",
      userName: "reduxTe",
      phoneNumber: "6152918273",
      email: "reduxTesting@gmail.com",
      gender: "male",
      password: "testing123",
    };

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
    builder.addCase(signUpUser.pending, (state) => {
      state.error = null;
      state.status = "loading";
    });
    builder.addCase(signUpUser.fulfilled, (state, action: any) => {
      state.status = "succeeded";
      state.user = action.payload;
    });
    builder.addCase(signUpUser.rejected, (state, action: any) => {
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
