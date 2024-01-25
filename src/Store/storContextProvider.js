import StoreContext from "./storeContext";
import { useState } from "react";

const StorContextProvider = props => {
    const [storeItems, setStoreItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    
    const addItemHandler = (item) => {
        const storeItemIndex = storeItems.findIndex(i => i.name == item.name);
        
        if(storeItemIndex !==-1) {
            const storeItem = storeItems[storeItemIndex];
            console.log(storeItem, item)
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
            if(name == "lSize"){
                storeItemCount = newStoreItem.lSize;
                newCartItem = {
                    ...newCartItem,
                    lSize:1
                }
                newStoreItem = {
                    ...newStoreItem,
                    lSize:storeItemCount-1
                }

            }
            else if(name == "mSize"){
                storeItemCount = newStoreItem.mSize;
                newCartItem = {
                    ...newCartItem,
                    mSize:1
                }
                newStoreItem = {
                    ...newStoreItem,
                    lSize:storeItemCount-1
                }

            }
            else{
                storeItemCount = newStoreItem.sSize;
                newCartItem = {
                    ...newCartItem,
                    sSize:1
                }
                newStoreItem = {
                    ...newStoreItem,
                    lSize:storeItemCount-1
                }

            }
        }
      else {
         if(name == "lSize"){
            storeItemCount = newStoreItem.lSize;
            cartItemCount = cartItems[cartItem].lSize
            newCartItem = {
                ...cartItems[cartItem],
                lSize:cartItemCount+1
            }
            newStoreItem = {
                ...newStoreItem,
                lSize:storeItemCount-1
            }
        }
        else if(name == "mSize"){
            storeItemCount = newStoreItem.mSize;
            cartItemCount = cartItems[cartItem].mSize
            newCartItem = {
                ...cartItems[cartItem],
                mSize:cartItemCount+1
            }
            newStoreItem = {
                ...newStoreItem,
                mSize:storeItemCount-1
            }
        }
        else{
            storeItemCount = newStoreItem.sSize;
            cartItemCount = cartItems[cartItem].sSize
            newCartItem = {
                ...cartItems[cartItem],
                sSize:cartItemCount+1
            }
            newStoreItem = {
                ...newStoreItem,
                sSize:storeItemCount-1
            }
        }
        }
            newCartItems = [...cartItems];
            newCartItems[cartItem] = newCartItem;
            newStoreItems = [...storeItems]
            newStoreItems[item] = newStoreItem

            console.log(newStoreItem)
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