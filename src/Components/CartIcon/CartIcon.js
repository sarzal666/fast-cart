import './CartIcon.scss';
import cartContext from "../../Context/CartContext";
import {useContext} from "react";

export default function CartIcon() {

    const { cart } = useContext(cartContext);
    const isSmthInCart = cart.length > 0;

    return (
        <div className="cart">
            <img src="/shopping-cart.png" alt="shopping cart" />
            {isSmthInCart && <div className="items-counter">{cart.length}</div>}
        </div>
    );
}