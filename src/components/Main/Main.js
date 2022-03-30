import './Main.scss'
import ProductList from "../ProductList/ProductList";
import useFetch from "../../Hooks/useFetch";
import FetchError from "../FetchError/FetchError";
import FetchingLoader from "../FetchingLoader/FetchingLoader";
import {useParams} from "react-router-dom";

export default function Main() {

    const { category } = useParams();
    const url = category ? `https://fakestoreapi.com/products/category/${category}` :
        'https://fakestoreapi.com/products'

    const { products, fetching, error } = useFetch(url)

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