import './Cart.scss';
import {useContext} from "react";
import CartContext from "../../Context/CartContext";
import Button from "../Button/Button";


function getCartTotal(cart) {
    let result = 0;

    cart.forEach(item => Number(result += item.getPrice()).toFixed(2))

    return result
}

export default function Cart() {

    const {cart, setCart} = useContext(CartContext);

    return (
        <section className="cart-wrapper wrapper">
            <h1>Your Products ({cart.length} pcs)</h1>
            <div className="cart">
                <ul className="cart__items-list">
                    {cart && cart.map(item => (
                        <li className="cart-item" key={item.product.id}>
                            <div>
                                <img src={item.product.image} width={100} alt="product"/>
                            </div>
                            <div>
                                <p>{item.product.title}</p>
                            </div>
                            <div className="cart-item__totals">
                                <div>
                                    <h2>price</h2>
                                    <p>{item.product.price} $</p>
                                </div>
                                <div>
                                    <h2>quantity</h2>
                                    <p>{item.quantity} pcs</p>
                                </div>
                                <div>
                                    <h2>total</h2>
                                    <p>{item.getPrice()} $</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="summary">
                <h2>
                    total: {getCartTotal(cart)} $
                </h2>
                <Button text="checkout" />
            </div>
        </section>
    );
}