import CartItem from "../Constructs/CartItem";
import {useReducer} from "react";
import cartActions from "../Constructs/enums/cartActions";

function cartReducer(cart, { product, type }) {

    switch (type) {
        case cartActions.ADD: {
            const isInCart = cart.findIndex(item => item.product.id === product.id)
            if ( isInCart !== -1 ) {
                cart[isInCart].increaseQuantity()
                return [...cart];
            }
            return [...cart, new CartItem(product)]
        }
        case cartActions.DELETE: {
            return cart.filter(item => item.product.id === product.id)
        }
        default: throw new Error(`invalid cart action ${type}`)
    }
}

export default function useCart(initialState = []) {
    const [items, dispatch] = useReducer(cartReducer,[]);

    return { items, dispatch }
}
