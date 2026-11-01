
import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* Brand Information */}
                <div className="footer-brand">
                    <h2>Sarthiq</h2>
                    <p>by Sarthak Raj</p>

                    <p className="footer-description">
                        Shop Smart. Live Better.
                        Discover products that fit your
                        lifestyle and your budget.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-column">
                    <h3>Quick Links</h3>

                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/categories">Categories</Link>
                    <Link to="/cart">Shopping Cart</Link>
                </div>

                {/* Customer Support */}
                <div className="footer-column">
                    <h3>Customer Support</h3>

                    <Link to="/contact">Contact Us</Link>
                    <Link to="/orders">My Orders</Link>
                    <Link to="/login">My Account</Link>
                </div>

                {/* Social Links */}
                <div className="footer-column">
                    <h3>Follow Us</h3>

                    <a href="https://www.instagram.com/"
                       target="_blank"
                       rel="noreferrer">
                        Instagram
                    </a>

                    <a href="https://www.facebook.com/"
                       target="_blank"
                       rel="noreferrer">
                        Facebook
                    </a>

                    <a href="https://www.youtube.com/"
                       target="_blank"
                       rel="noreferrer">
                        YouTube
                    </a>
                </div>

            </div>

            <div className="footer-bottom">
                <p>
                    © {new Date().getFullYear()} Sarthiq.
                    All Rights Reserved.
                </p>
                <p>Made with care for smart shoppers.</p>
            </div>

        </footer>
    );
}

export default Footer;
