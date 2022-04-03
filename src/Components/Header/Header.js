import './Header.scss';
import {Link} from "react-router-dom";
import CartIcon from "../CartIcon/CartIcon";

export default function Header() {
    return (
        <header className="header">
            <nav className="navigation">
                <ul className="navigation__list">
                    <li className="navigation__list--item">
                        <Link to="/products">Products</Link>
                    </li>
                    <li className="navigation__list--item">
                        <Link to="/categories">Categories</Link>
                    </li>
                </ul>
                <Link to="/cart">
                    <CartIcon />
                </Link>
            </nav>
        </header>
    );
}