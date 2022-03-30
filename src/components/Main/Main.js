import './Main.scss'
import {useEffect, useState} from "react";
import ProductList from "../ProductList/ProductList";

export default function Main() {

    const [products, setProducts] = useState([]);
    const [fetching, setFetching] = useState(true);

    async function fetchProducts() {
        const response = await fetch('https://fakestoreapi.com/products');
        return await response.json();
    }

    useEffect(() => {
        fetchProducts().then(products => {
            setProducts(products)
            setFetching(false);
        })
    },[]);

    return (
        <section className="wrapper">
            <h1> Done is better than Perfect ! </h1>
            <div className="products">
                {(() => {
                    if (fetching) {
                        return (
                            <div>fetching products...</div>
                        );
                    } else {
                        if (products.length) {
                            return <ProductList products={products} />
                        } else {
                            return (
                                <div>unexpected error, please try again later</div>
                            );
                        }
                    }
                })() }
            </div>
        </section>
    );
}