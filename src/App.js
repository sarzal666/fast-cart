import './App.scss';
import Header from "./Components/Header/Header";
import {BrowserRouter, Route, Routes, Outlet} from "react-router-dom";
import Main from "./Components/Main/Main";
import Categories from "./Components/Categories/Categories";
import Cart from "./Components/Cart/Cart";
import React from "react";
import CartContext from "./Context/CartContext";
import useCart from "./Hooks/useCart";

function App() {

    const { items, dispatch } = useCart();

    return (
        <CartContext.Provider value={{ cart: items, setCart: dispatch }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Header />
                            <Outlet />
                        </>
                    } >
                        <Route path="products" element={<Main />} />
                        <Route path="categories" element={<Categories />}>
                            <Route path=":category" element={<Main />} />
                        </Route>
                        <Route path="cart" element={<Cart />} />
                        <Route
                            path="*"
                            element={ <Main /> }
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </CartContext.Provider>
    );
}

export default App;
