import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import api from "@/api/api";
import { IUser, IAuthResponse } from "@/types/user.types";

export const getUserByIdThunk = createAsyncThunk<
  IAuthResponse, // повертаємо весь об'єкт (user + message)
  string,
  { rejectValue: string }
>("user/getById", async (id, { rejectWithValue }) => {
  try {
    const res = await api.get(`api/users/${id}`, {
      withCredentials: true,
    });
    return res.data; // очікуємо { user: IUser, message: string }
  } catch (e) {
    const error = e as AxiosError<{ message: string }>;
    const errorMessage = error.response?.data?.message || error.message;
    return rejectWithValue(errorMessage);
  }
});

export const updateUserThunk = createAsyncThunk<
  IAuthResponse, // повертаємо весь об'єкт (user + message)
  { id: string; payload: Partial<IUser> },
  { rejectValue: string }
>("user/updateById", async ({ id, payload }, { rejectWithValue }) => {
  try {
    const res = await api.put(`api/users/${id}`, payload, {
      withCredentials: true,
    });
    return res.data; // очікуємо { user: IUser, message: string }
  } catch (e) {
    const error = e as AxiosError<{ message: string }>;
    const errorMessage = error.response?.data?.message || error.message;
    return rejectWithValue(errorMessage);
  }
});

export const deleteUserThunk = createAsyncThunk<
  IAuthResponse, // або можна void, якщо бек не повертає корисного, але для уніфікації теж зробив IAuthResponse
  string,
  { rejectValue: string }
>("user/deleteById", async (id, { rejectWithValue }) => {
  try {
    const res = await api.delete(`api/users/${id}`, {
      withCredentials: true,
    });
    return res.data; // очікуємо { message: string }
  } catch (e) {
    const error = e as AxiosError<{ message: string }>;
    const errorMessage = error.response?.data?.message || error.message;
    return rejectWithValue(errorMessage);
  }
});

export default {
  getUserByIdThunk,
  updateUserThunk,
  deleteUserThunk,
};
