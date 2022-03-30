import {useEffect, useState} from "react";

export default function useFetch(url) {
    const [products, setProducts] = useState([]);
    const [fetching, setFetching] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
                .then(products => {
                    setProducts(products)
                    setFetching(false);
        }).catch(e => {
            setFetching(false)
            setError(e.message)
        })
    },[url]);

    return { products, fetching, error }
}