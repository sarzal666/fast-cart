import './Header.scss';

export default function Header() {
    return (
        <header className="header">
            <nav className="navigation">
                <ul className="navigation__list">
                    <li className="navigation__list--item">Categories</li>
                    <li className="navigation__list--item">Sale</li>
                    <li className="navigation__list--item">Your Cart</li>
                </ul>
            </nav>
        </header>
    );
}