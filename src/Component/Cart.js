import { Fragment, useContext, useState } from "react";
import StoreContext from "../Store/storeContext";
import CartTable from "../UI/CartTable";

const Cart = props => {
    const storeCtx = useContext(StoreContext);
    const cartCount = storeCtx.cartItems.reduce((count, item)=>count+item.lSize+item.mSize+item.sSize ,0)
    const [cartState, setCartState] = useState(false)
    const openCart = () => {setCartState(!cartState)};
    return <Fragment>
  <button onClick={openCart}>Cart {cartCount}</button>
  {cartState && <CartTable>{storeCtx.cartItems}</CartTable>}
    </Fragment>
}

export default Cart;