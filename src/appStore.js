import { create } from "zustand";

export const useStore = create((set) => ({
  currentUser: "Junior Asosa",
  productsAddedToCart: [],
  updateCart(newCart){
    set({productsAddedToCart : newCart})
  },
}));

