import store from "@/store";

import { getStarAccountAbi } from "./contract";

export const StarAccountInstance = () => {
  const { provider } = store.state.Provider;
  return getStarAccountAbi(provider);
};
