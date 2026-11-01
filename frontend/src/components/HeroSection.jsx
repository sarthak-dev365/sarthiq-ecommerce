
import { Link } from "react-router-dom";
import "../styles/hero.css";

function HeroSection() {
    return (
        <section className="hero-section">

            <div className="hero-content">

                <p className="hero-tag">
                    SMART SHOPPING STARTS HERE
                </p>

                <h1>
                    Shop Smart.
                    <br />
                    Live Better.
                </h1>

                <p className="hero-description">
                    Discover amazing products at prices that
                    fit your budget. Make every purchase
                    smarter with Sarthiq.
                </p>

                <Link to="/products" className="hero-button">
                    Explore Products
                </Link>

            </div>

            <div className="hero-image">
                <div className="hero-circle">
                    <span>🛍️</span>
                </div>
            </div>

        </section>
    );
}

export default HeroSection;
