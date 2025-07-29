import { configureStore } from "@reduxjs/toolkit";
import apartmentsReducer from "./apartments/slice";
import authReducer from "./auth/slice";
import userReduser from "./user/slice";

export const store = configureStore({
  reducer: {
    apartments: apartmentsReducer,
    auth: authReducer,
    user: userReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
