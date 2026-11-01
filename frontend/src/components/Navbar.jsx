
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
    return (
        <header className="navbar">

            <Link to="/" className="navbar-logo">
                <span className="logo-icon">S</span>

                <span className="logo-text">
                    <strong>Sarthiq</strong>
                    <small>by Sarthak Raj</small>
                </span>
            </Link>

            <form
                className="navbar-search"
                onSubmit={(event) => event.preventDefault()}
            >
                <input
                    type="text"
                    placeholder="Search products..."
                />
                <button type="submit">Search</button>
            </form>

            <nav className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/categories">Categories</Link>
                <Link to="/orders">My Orders</Link>
            </nav>

            <div className="navbar-actions">
                <Link to="/login" className="login-link">
                    Login
                </Link>

                <Link to="/cart" className="cart-link">
                    <span>🛒</span>
                    <span>Cart</span>
                    <span className="cart-count">0</span>
                </Link>
            </div>

        </header>
    );
}

export default Navbar;
