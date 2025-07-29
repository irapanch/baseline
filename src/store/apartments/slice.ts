import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IApartment } from "@/types/apartment.types";
import apartmentsThunk from "./operations";

interface ApartmentsState {
  list: IApartment[];
  current: IApartment | null;
  loading: boolean;
  error: string | null;
  message: string;
}

const initialState: ApartmentsState = {
  list: [],
  current: null,
  loading: false,
  error: null,
  message: "",
};
const apartmentsSlice = createSlice({
  name: "apartments",
  initialState,
  reducers: {
    resetApartments: () => initialState,
    clearCurrentApartment: (state) => {
      state.current = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Get all apartments
      .addCase(
        apartmentsThunk.getAllApartmentsThunk.fulfilled,
        (state, action) => {
          state.list = action.payload;
          state.loading = false;
        }
      )

      // Get one apartment by ID
      .addCase(
        apartmentsThunk.getApartmentByIdThunk.fulfilled,
        (state, action) => {
          state.current = action.payload;
          state.loading = false;
        }
      )

      // Update apartment
      .addCase(
        apartmentsThunk.updateApartmentThunk.fulfilled,
        (state, action) => {
          state.loading = false;
          state.message = "Оновлено";
          state.current = action.payload;
          state.list = state.list.map((apt) =>
            apt._id === action.payload._id ? action.payload : apt
          );
        }
      )

      // Загальні pending/rejected
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
          state.error = null;
          state.message = "";
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action: any) => {
          state.loading = false;
          state.error = action.error?.message || "Помилка запиту";
        }
      );
  },
});

export const { resetApartments, clearCurrentApartment } =
  apartmentsSlice.actions;
export default apartmentsSlice.reducer;
