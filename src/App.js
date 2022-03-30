import './App.scss';
import Header from "./components/Header/Header";
import {BrowserRouter, Route, Routes, Outlet} from "react-router-dom";
import Main from "./components/Main/Main";
import Categories from "./components/Categories/Categories";
import Cart from "./components/Cart/Cart";
import React, {useState} from "react";
import CartContext from "./Context/CartContext";

function App() {

    const [items, setItems] = useState([]);

    return (
        <CartContext.Provider value={{ cart: items, setCart: setItems }}>
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
