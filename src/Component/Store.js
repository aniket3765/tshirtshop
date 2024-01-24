import StoreContext from "../Store/storeContext";
import React, { useContext } from "react";

const Store = props => {
    const storeCtx = useContext(StoreContext);
    const onRemove = event => {
        storeCtx.addToCart(event.target.id, event.target.name)
    }

    return <React.Fragment>
        {storeCtx.storeItems.map(item => <li>{item.name} {item.description} {item.price} {item.lSize} {item.mSize} {item.sSize}
        <button id={item.id} name="lSize" onClick={onRemove}>L {item.lSize}</button>
        <button id={item.id} name="mSize" onClick={onRemove}>M {item.mSize}</button>
        <button id={item.id} name="sSize" onClick={onRemove}>S {item.sSize}</button>
        </li>)}
    </React.Fragment>
}

export default Store;