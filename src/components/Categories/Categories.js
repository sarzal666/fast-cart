import useFetch from "../../Hooks/useFetch";
import FetchError from "../FetchError/FetchError";
import FetchingLoader from "../FetchingLoader/FetchingLoader";
import CategoriesList from "../CategoriesList/CategoriesList";
import { Outlet } from "react-router-dom";

export default function Categories() {
    const { products: categories, fetching, error } = useFetch("https://fakestoreapi.com/products/categories");

    return (
        <section className="wrapper">
            <h2 style={{fontSize: '2em'}}>Choose fancy category:</h2>
            {error && <FetchError message={error} /> }
            {fetching && <FetchingLoader />}
            {categories && <CategoriesList categories={categories} />}
            <Outlet />
        </section>
    );
}