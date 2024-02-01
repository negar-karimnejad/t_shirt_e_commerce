import { create } from "zustand";
import { persist } from "zustand/middleware";

type CkeckoutState = {
  paymentIntent: string;
  onCheckout: string;
  setPaymentIntent: (val: string) => void;
  setCheckout: (val: string) => void;
};

export const useCkeckoutStore = create<CkeckoutState>()(
  persist(
    (set) => ({
      // Initial State
      paymentIntent: "",
      onCheckout: "cart",

      // Set State
      setPaymentIntent: (val) => set((set) => ({ paymentIntent: val })),
      setCheckout: (val) => set((set) => ({ onCheckout: val })),
    }),
    { name: "checkout-store" }
  )
);
