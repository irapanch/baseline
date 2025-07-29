import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthResponse, IUser } from "@/types/user.types";
import userThunk from "./operations";

interface IUserState {
  user: IUser | null;
  isLoading: boolean;
  error: string | null;
  message: string;
}

const initialState: IUserState = {
  user: null,
  isLoading: false,
  error: null,
  message: "",
};

const handlePending = (state: IUserState): IUserState => ({
  ...state,
  isLoading: true,
  error: null,
  message: "",
});

const handleRejected = (
  state: IUserState,
  action: PayloadAction<string | undefined>
): IUserState => ({
  ...state,
  isLoading: false,
  error: action.payload || "error message",
});

const handleUserFulfilled = (
  state: IUserState,
  action: PayloadAction<IAuthResponse>
): IUserState => ({
  ...state,
  isLoading: false,
  user: action.payload.user,
  message: action.payload.message,
  error: null,
});

const handleDeleteFulfilled = (state: IUserState): IUserState => ({
  ...state,
  isLoading: false,
  user: null,
  message: "User deleted successfully",
  error: null,
});

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    resetUser: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(userThunk.getUserByIdThunk.fulfilled, handleUserFulfilled)
      .addCase(userThunk.updateUserThunk.fulfilled, handleUserFulfilled)
      .addCase(userThunk.deleteUserThunk.fulfilled, handleDeleteFulfilled)

      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      );
  },
});
export const { resetUser } = userSlice.actions;
export default userSlice.reducer;
