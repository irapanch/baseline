import {
  createSlice,
  isPending,
  isRejected,
  isFulfilled,
  PayloadAction,
} from "@reduxjs/toolkit";
import { IUser, IAuthResponse } from "@/types/user.types";
import authThunk from "./operations";

interface IState {
  isLoading: boolean;
  isLogin: boolean;
  error: string | null;
  message: string;
  user: IUser | null;
}

const initialState: IState = {
  isLoading: false,
  isLogin: false,
  error: null,
  message: "",
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.isLogin = false;
      state.error = null;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      // Login fulfilled
      .addCase(
        authThunk.loginUserThunk.fulfilled,
        (state, action: PayloadAction<IAuthResponse>) => {
          state.isLoading = false;
          state.isLogin = true;
          state.user = action.payload.user;
          state.message = action.payload.message;
          state.error = null;
        }
      )
      // Register fulfilled
      .addCase(
        authThunk.registerUserThunk.fulfilled,
        (state, action: PayloadAction<IAuthResponse>) => {
          state.isLoading = false;
          state.isLogin = false; // Після успішної реєстрації вважаємо, що юзер не логіниться
          state.user = action.payload.user;
          state.message = action.payload.message;
          state.error = null;
        }
      )
      // Pending matcher for both login and register
      .addMatcher(
        (action) =>
          isPending(authThunk.loginUserThunk)(action) ||
          isPending(authThunk.registerUserThunk)(action),
        (state) => {
          state.isLoading = true;
          state.error = null;
          state.isLogin = false;
        }
      )
      // Rejected matcher for both login and register
      .addMatcher(
        (action) =>
          isRejected(authThunk.loginUserThunk)(action) ||
          isRejected(authThunk.registerUserThunk)(action),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload as string;
          state.user = null;
          state.isLogin = false;
        }
      );
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
