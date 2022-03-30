import Product from "../Product/Product";
import './ProductList.scss'

export default function ProductList({ products }) {
    return (
        products && products.map(product => <Product price={product.price} img={product.image} name={product.title} key={product.id}/>)
    );
}