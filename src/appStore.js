import { create } from "zustand";
import { productsData } from "./data";

let data = productsData[0]


export const useStore = create((set) => ({
  currentUser: "Junior Asosa",
  productsAddedToCart: [data] ,
  updateCart(newCart){
    set({productsAddedToCart : newCart})
  },
}));

