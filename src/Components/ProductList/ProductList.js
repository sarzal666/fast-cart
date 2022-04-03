import Product from "../Product/Product";
import './ProductList.scss'

export default function ProductList({ products }) {
    return (
        products && products.map(product => <Product data={product} key={product.id}/>)
    );
}