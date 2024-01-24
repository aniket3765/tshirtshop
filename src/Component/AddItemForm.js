import React, { useContext } from "react";
import StoreContext from "../Store/storeContext";

const AddItemForm = props => {
    console.log("form")
 const  storeCtx = useContext(StoreContext);

 const addItem = (event) => {
    event.preventDefault();
    const [tShirtName, description, price, lSize, mSize, sSize] = [...event.target];
    const id = storeCtx.storeItems.length+1;
    storeCtx.addItem({
        id:id,
        name:tShirtName.value,
        description:description.value,
        price:price.value,
        lSize:lSize.value,
        mSize:mSize.value,
        sSize:sSize.value
    });
 }

    return <React.Fragment>
        <form onSubmit={addItem}>
            <label>T-shirt Name</label>
            <input id="tshirtName" type="text"/>
            <label>Dscription</label>
            <input id="description" type="text"/>
            <label>Price</label>
            <input id="price" type="number" />
            <input id="lSize" type="number" placeholder="L"/>
            <input id="mSize" type="number" placeholder="M"/>
            <input id="sSize" type="number" placeholder="S"/>
            <button type="submit">Add T-shirt</button>
        </form>
    </React.Fragment>
};

export default AddItemForm;