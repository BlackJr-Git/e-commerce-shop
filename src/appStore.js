import { create } from "zustand";
import { samsungS23Ultra } from "./assets";

export const useStore = create((set) => ({
  currentUser: "Junior Asosa",
  productsAddedToCart: [],
  updateCart(newCart){
    set({productsAddedToCart : newCart})
  }
}));

// export default useStore ;