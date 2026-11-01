
import { useState } from "react";
import "../styles/budget-picks.css";

function BudgetPicks() {

    const [selectedBudget, setSelectedBudget] = useState(500);

    const products = [
        {
            id: 1,
            name: "Notebook Set",
            price: 199,
            icon: "📚"
        },
        {
            id: 2,
            name: "Phone Stand",
            price: 299,
            icon: "📱"
        },
        {
            id: 3,
            name: "Wireless Mouse",
            price: 499,
            icon: "🖱️"
        },
        {
            id: 4,
            name: "Smart Watch",
            price: 1299,
            icon: "⌚"
        }
    ];

    const filteredProducts = products.filter(
        (product) => product.price <= selectedBudget
    );

    return (
        <section className="budget-section">

            <h2>Smart Budget Picks</h2>

            <p>Find the best products within your budget.</p>

            <div className="budget-options">
                <button onClick={() => setSelectedBudget(500)}>
                    Under ₹500
                </button>

                <button onClick={() => setSelectedBudget(1000)}>
                    Under ₹1,000
                </button>

                <button onClick={() => setSelectedBudget(2000)}>
                    Under ₹2,000
                </button>
            </div>

            <div className="budget-product-grid">

                {filteredProducts.map((product) => (
                    <div className="budget-product-card" key={product.id}>
                        <span>{product.icon}</span>
                        <h3>{product.name}</h3>
                        <strong>₹{product.price}</strong>
                    </div>
                ))}

            </div>

        </section>
    );
}

export default BudgetPicks;
