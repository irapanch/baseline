import { RootState } from "@/store/store";

const selectApartments = (state: RootState) => state.apartments.list;
const selectLoading = (state: RootState) => state.apartments.loading;
const selectError = (state: RootState) => state.apartments.error;

export default {
  selectApartments,
  selectLoading,
  selectError,
};
