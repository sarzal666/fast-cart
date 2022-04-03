import './Product.scss';
import Button from "../Button/Button";
import CartContext from "../../Context/CartContext";
import cartActions from "../../Constructs/enums/cartActions";

export default function Product({data}) {
    return (
        <CartContext.Consumer>
            {({ cart,setCart }) => {
                return (
                    <div className="product">
                        <img src={data.image} alt="product"/>
                        <span className="name">{data.title}</span>
                        <div className="price">{data.price} <span className="price-symbol">$</span></div>
                        <Button text="Add" handler={() => setCart({
                            product: data,
                            type: cartActions.ADD
                        })}/>
                    </div>
                );
            }}

        </CartContext.Consumer>
    );
}