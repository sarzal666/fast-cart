import './Main.scss'
import ProductList from "../ProductList/ProductList";
import useFetch from "../../Hooks/useFetch";
import FetchError from "../FetchError/FetchError";
import FetchingLoader from "../FetchingLoader/FetchingLoader";

export default function Main() {

    const { products, fetching, error } = useFetch('https://fakestoreapi.com/products')

    return (
            <section className="wrapper">
                <h1> Done is better than Perfect ! </h1>
                <div className="products">
                    {error && <FetchError message={error}/>}
                    {fetching && <FetchingLoader />}
                    {products && <ProductList products={products} />}
                </div>
            </section>
    );
}