import StoreContext from "../Store/storeContext";
import React, { useContext } from "react";
import StoreTable from "../UI/StoreTable";

const Store = props => {
    const storeCtx = useContext(StoreContext);
    const onRemove = event => {
        storeCtx.addToCart(event.target.id, event.target.name)
    }

    return <React.Fragment>
        
        <StoreTable onRemove ={onRemove}>{storeCtx.storeItems}
        </StoreTable>
    </React.Fragment>
}

export default Store;