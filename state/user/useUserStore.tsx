import { create } from "zustand";
import produce from "immer";
import { devtools } from "zustand/middleware";

interface StoreState {
  address: string;
  setAddress: (address: string) => void;
}

const useUserStore = create<StoreState>((set) => ({
  address: "",
  setAddress: (address) =>
    set((state) => ({
      ...state,
      address,
    })),
}));

export default useUserStore;
