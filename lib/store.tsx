import create from "zustand";
import produce from "immer";

interface StoreState {
  address: string;
  setAddress: (address: string) => void;
}

export const useStore = create<StoreState>((set, get) => ({
  address: "",
  setAddress: (address) => set((state) => ({ address: address })),
}));
