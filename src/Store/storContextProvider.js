import StoreContext from "./storeContext";
import { useState } from "react";

const StorContextProvider = props => {
    const [storeItems, setStoreItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const addItemHandler = (item) => {
        const storeItemIndex = storeItems.findIndex(i => i.name == item.name);
        
        if(storeItemIndex !==-1) {
            const storeItem = storeItems[storeItemIndex];
            const newItem = {
                ...storeItem,
                lSize: (+storeItem.lSize)+(+item.lSize),
                mSize: (+storeItem.mSize)+(+item.mSize),
                sSize: (+storeItem.sSize)+(+item.sSize)
            }
            const newItems = [...storeItems];
            newItems[storeItemIndex] = newItem;
        setStoreItems(newItems);
        return;
        }
        const newItems = [...storeItems, item];
        setStoreItems(newItems);
    }
    const removeFromStore = (id) => {
        console.log(id)
        const newStoreItems = storeItems.filter(item => item.id == id);
        console.log(newStoreItems)
        setStoreItems(newStoreItems);   
    }

    const addToCartHandler = (id, name) => {
        const item =storeItems.findIndex(item => item.id==id);

        let cartItem = cartItems.findIndex(item => item.id==id);
        let newCartItems, newCartItem, newStoreItems, cartItemCount, storeItemCount,
        newStoreItem = {
            ...storeItems[item]
        }
        
        if(cartItem === -1){ 
            cartItem = cartItems.length
            newCartItem = {
                ...storeItems[item],
                lSize:0,
                mSize:0,
                sSize:0
            }
           
                storeItemCount = newStoreItem[name];
                newCartItem[name]=1
                newStoreItem = {...newStoreItem}
                newStoreItem[name] = storeItemCount-1;
                console.log(newStoreItem.lSize==newStoreItem.mSize==newStoreItem.sSize==0)
                if(newStoreItem.lSize<= 0 && newStoreItem.mSize<= 0 && newStoreItem.sSize<= 0)removeFromStore(item)
                

        }
      else {
            storeItemCount = newStoreItem[name];
            cartItemCount = cartItems[cartItem][name]

            newCartItem = {...cartItems[cartItem]}
            newCartItem[name] = cartItemCount+1;
            
            newStoreItem[name] = storeItemCount-1
        
            if(newStoreItem.lSize<= 0 && newStoreItem.mSize<= 0 && newStoreItem.sSize<= 0) {
               return removeFromStore(item)  
            }  
         
        }

        
            newCartItems = [...cartItems];
            newCartItems[cartItem] = newCartItem;
            newStoreItems = [...storeItems]
            newStoreItems[item] = newStoreItem;

          setCartItems(newCartItems) 
          setStoreItems(newStoreItems)    
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