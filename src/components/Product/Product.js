import './Product.scss';
import Button from "../Button/Button";

export default function Product({name, img, price}) {
    return (
        <div className="product">
            <img src={img} alt="product"/>
            <span className="name">{name}</span>
            <div className="price">{price} <span className="price-symbol">$</span></div>
            <Button text="Add" handler={(e) => console.log(e)}/>
        </div>
    );
}