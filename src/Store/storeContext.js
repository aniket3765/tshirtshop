import React from "react";

const StoreContext = React.createContext({
    storeItems:[],
    cartItems:[],
    addItem:()=>{},
    addToCart:()=>{}
});

export default StoreContext;