import './Header.scss';
import {Link} from "react-router-dom";

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
                    <li className="navigation__list--item">
                        <Link to="/sale">Sale</Link>
                    </li>
                    <li className="navigation__list--item">
                        <Link to="/cart">Your Cart</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}