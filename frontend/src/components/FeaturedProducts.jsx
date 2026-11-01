
import "../styles/featured-products.css";

function FeaturedProducts() {

    const products = [
        {
            id: 1,
            name: "Wireless Headphones",
            price: 799,
            icon: "🎧",
            category: "Electronics"
        },
        {
            id: 2,
            name: "Notebook Set",
            price: 199,
            icon: "📚",
            category: "Stationery"
        },
        {
            id: 3,
            name: "Smart Watch",
            price: 1299,
            icon: "⌚",
            category: "Accessories"
        },
        {
            id: 4,
            name: "Travel Backpack",
            price: 599,
            icon: "🎒",
            category: "Lifestyle"
        }
    ];

    return (
        <section className="featured-section">

            <div className="section-heading">
                <h2>Featured Products</h2>
                <p>Popular picks selected for smart shoppers.</p>
            </div>

            <div className="product-grid">

                {products.map((product) => (
                    <div className="product-card" key={product.id}>

                        <div className="product-icon">
                            {product.icon}
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
                ))}

            </div>

        </section>
    );
}

export default FeaturedProducts;
