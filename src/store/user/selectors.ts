import { RootState } from "@/store/store";

const userProfileSelect = (state: RootState) => state.user.user;

export default {
  userProfileSelect,
};
