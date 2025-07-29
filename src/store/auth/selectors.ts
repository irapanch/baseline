import { RootState } from "@/store/store";

const messageSelect = (state: RootState) => state.auth.message;
const errorSelect = (state: RootState) => state.auth.error;
const isLoadingSelect = (state: RootState) => state.auth.isLoading;
const isLoginSelect = (state: RootState) => state.auth.isLogin;
const userSelect = (state: RootState) => state.auth.user;

export default {
  messageSelect,
  errorSelect,
  isLoadingSelect,
  isLoginSelect,
  userSelect,
};
