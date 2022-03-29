import './Main.scss'
import {useEffect, useState} from "react";
import Product from "../Product/Product";

export default function Main() {

    const [products, setProducts] = useState([]);

    async function fetchProducts() {
        const response = await fetch('https://fakestoreapi.com/products');
        return await response.json();
    }

    useEffect(() => {
        fetchProducts().then(products => setProducts(products))
    },[]);

    // fetchProducts().then(products => setProducts(products));
    console.log(products)
    // setProducts(fetchProducts())

    return (
        <section className="wrapper">
            <h1> Done is better than Perfect ! </h1>
            <div className="products">
                {products && products.map(product => (
                    <Product price={product.price} img={product.image} name={product.title} />
                ))}
                {/*<div className="product">*/}
                {/*    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="product"/>*/}
                {/*    <span className="name">laptop</span>*/}
                {/*    <div className="price">1222.99 <span className="price-symbol">$</span></div>*/}
                {/*    <button>Add</button>*/}
                {/*</div>*/}
                {/*<div className="product">*/}
                {/*    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="product"/>*/}
                {/*    <span className="name">Guma Turbo</span>*/}
                {/*    <div className="price">0.50 <span className="price-symbol">$</span></div>*/}
                {/*    <button>Add</button>*/}
                {/*</div>*/}
            </div>
        </section>
    );
}