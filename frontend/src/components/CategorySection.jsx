
import "../styles/categories.css";

function CategorySection() {

    const categories = [
        {
            name: "Electronics",
            icon: "🎧"
        },
        {
            name: "Stationery",
            icon: "📚"
        },
        {
            name: "Accessories",
            icon: "⌚"
        },
        {
            name: "Lifestyle",
            icon: "🎒"
        }
    ];

    return (
        <section className="category-section">

            <div className="section-heading">
                <h2>Shop by Category</h2>
                <p>Find what you need, all in one place.</p>
            </div>

            <div className="category-grid">

                {categories.map((category, index) => (
                    <div className="category-card" key={index}>

                        <span className="category-icon">
                            {category.icon}
                        </span>

                        <h3>{category.name}</h3>

                        <p>Explore Collection</p>

                    </div>
                ))}

            </div>

        </section>
    );
}

export default CategorySection;
