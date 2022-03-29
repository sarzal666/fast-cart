export default function Product({name, img, price}) {
    return (
        <div className="product">
            <img src={img} alt="product"/>
            <span className="name">{name}</span>
            <div className="price">{price} <span className="price-symbol">$</span></div>
            <button>Add</button>
        </div>
    );
}