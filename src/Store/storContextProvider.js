import StoreContext from "./storeContext";
import { useState } from "react";

const StorContextProvider = props => {
    const [storeItems, setStoreItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const addItemHandler = (item) => {
        const newItems = [...storeItems, item];
        setStoreItems(newItems);
    }

    const addToCartHandler = (id, name) => {
        const item =storeItems.findIndex(item => item.id==id);
        const cartItem = cartItems.findIndex(item => item.id==id);
        const storeCount = storeItems[item]
        let newCartItems;
        if(cartItem)   
        
    }

    const storeContext = {
        storeItems:storeItems,
        cartItems:cartItems,
        addItem:addItemHandler,
        addToCart:addToCartHandler
    }
    
    return <StoreContext.Provider value={storeContext}>
        {props.children}
    </StoreContext.Provider>
}

export default StorContextProvider;