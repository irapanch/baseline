import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/api/api";
import { IAuthResponse } from "@/types/user.types";

interface LoginPayload {
  login: string;
  password: string;
}

interface RegisterPayload {
  userName: string;
  login: string;
  password: string;
  confirmPassword: string;
  number: number;
}

const loginUserThunk = createAsyncThunk<IAuthResponse, LoginPayload>(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await api.post("api/auth/login", credentials, {
        withCredentials: true,
      });
      return res.data; // повертаємо весь об'єкт { user, message }
    } catch (err: any) {
      const message =
        err.response?.data?.message || err.message || "Помилка авторизації";
      return rejectWithValue(message);
    }
  }
);

const registerUserThunk = createAsyncThunk<IAuthResponse, RegisterPayload>(
  "auth/registerUser",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await api.post("api/auth/register", payload, {
        withCredentials: true,
      });
      return res.data; // теж повертаємо { user, message }
    } catch (err: any) {
      const message =
        err.response?.data?.message || err.message || "Помилка реєстрації";
      return rejectWithValue(message);
    }
  }
);

export default {
  loginUserThunk,
  registerUserThunk,
};
