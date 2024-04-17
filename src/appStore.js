import { create } from "zustand";
// import { BradleyAvatar } from "./assets";
// import { productsData } from "./data";

// let data = productsData[0]


export const useStore = create((set) => ({
  currentUser: {
    name: "",
    firstName: "",
    phone: "",
    email: "",
    country: "",
    adress: "",
    adress2: "",
    city: "",
    township: "",
    avatar : "" , 
  },
  updateUser(newUser){
    set({currentUser : newUser})
  },
  productsAddedToCart: [] , 
  updateCart(newCart){
    set({productsAddedToCart : newCart})
  }, 
}));


