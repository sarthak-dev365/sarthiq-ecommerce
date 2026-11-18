
import { useState, useEffect } from "react";
import "../styles/featured-products.css";

function FeaturedProducts() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchFeaturedProducts = async () => {
            try {
                const response = await fetch(
                    "http://localhost:5000/api/products/featured"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch featured products");
                }

                const data = await response.json();

                setProducts(data);

            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFeaturedProducts();

    }, []);

    return (
        <section className="featured-section">

            <div className="section-heading">
                <h2>Featured Products</h2>
                <p>Popular picks selected for smart shoppers.</p>
            </div>

            <div className="product-grid">

                {loading ? (
                    <p>Loading featured products...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : products.length > 0 ? (

                    products.map((product) => (
                        <div className="product-card" key={product._id}>

                            <div className="product-icon">
                                {product.image?.startsWith("http") ? (
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "contain"
                                        }}
                                    />
                                ) : (
                                    "📦"
                                )}
                            </div>

                            <p className="product-category">
                                {product.category}
                            </p>

                            <h3>{product.name}</h3>

                            <strong className="product-price">
                                ₹{product.price}
                            </strong>

                            <button type="button">
                                View Product
                            </button>

                        </div>
                    ))

                ) : (
                    <p className="no-products">
                        No featured products available.
                    </p>
                )}

            </div>

        </section>
    );
}

export default FeaturedProducts;
