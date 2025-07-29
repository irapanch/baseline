import { createAsyncThunk } from "@reduxjs/toolkit";
import { IApartment } from "@/types/apartment.types";
import api from "@/api/api";

// get all
const getAllApartmentsThunk = createAsyncThunk<IApartment[]>(
  "apartments/getAll",
  async () => {
    const res = await api.get("api/apartments/");
    return res.data;
  }
);

// get by ID
const getApartmentByIdThunk = createAsyncThunk<IApartment, string>(
  "apartments/getById",
  async (id) => {
    const res = await api.get(`api/apartments/${id}`);
    return res.data;
  }
);

// update
const updateApartmentThunk = createAsyncThunk<IApartment, IApartment>(
  "apartments/update",
  async (apartment) => {
    const res = await api.patch(`api/apartments/${apartment._id}`, apartment);
    return res.data;
  }
);

export default {
  getAllApartmentsThunk,
  getApartmentByIdThunk,
  updateApartmentThunk,
};
