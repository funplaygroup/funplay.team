import store from "@/store";

import { getFunPlayAbi } from "./contract";

export const FunPlayInstance = () => {
  const { provider } = store.state.Provider;
  return getFunPlayAbi(provider);
};
