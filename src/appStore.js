import { create } from "zustand";

export const useStore = create((set) => ({
  currentUser: {
    name: "",
    firstName: "",
    phone: "",
    email: "",
    country: "",
    address: "",
    address2: "",
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

  orderItems : [] ,
  updateOrder(newOrder){
    set({orderItems : newOrder})
  }
}));





