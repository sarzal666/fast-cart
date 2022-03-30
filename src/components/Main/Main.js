import './Main.scss'
import ProductList from "../ProductList/ProductList";
import useFetch from "../../Hooks/useFetch";
import CartContext from "../../Context/CartContext";

export default function Main() {

    const { products, fetching, error } = useFetch('https://fakestoreapi.com/products')

    return (
            <section className="wrapper">
                <h1> Done is better than Perfect ! </h1>
                <div className="products">
                    {error && <div>unexpected error: {error}</div>}
                    {fetching && <div>fetching products...</div>}
                    {products && <ProductList products={products} />}
                </div>
            </section>
    );
}