import create from "zustand";
import produce from "immer";
import { devtools } from "zustand/middleware";

interface StoreState {
  address: string;
  setAddress: (address: string) => void;
}

const useUserStore = create<StoreState>(
  devtools(
    (set, get) => ({
      address: "",
      setAddress: (address) => set((state) => ({ address: address })),
    }),
    {
      name: "userStore",
    }
  )
);

export default useUserStore;
