import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/products.css";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 799,
      category: "Electronics",
      icon: "🎧",
    },
    {
      id: 2,
      name: "Notebook Set",
      price: 199,
      category: "Stationery",
      icon: "📚",
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 1299,
      category: "Accessories",
      icon: "⌚",
    },
    {
      id: 4,
      name: "Travel Backpack",
      price: 599,
      category: "Lifestyle",
      icon: "🎒",
    },
    {
      id: 5,
      name: "Wireless Mouse",
      price: 499,
      category: "Electronics",
      icon: "🖱️",
    },
    {
      id: 6,
      name: "Pen Combo",
      price: 149,
      category: "Stationery",
      icon: "🖊️",
    },
  ];

  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <section className="products-page">
      <div className="products-heading">
        <h1>Explore Products</h1>
        <p>Find your favourite products at the best prices.</p>
      </div>

      <div className="products-controls">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Stationery">Stationery</option>
          <option value="Accessories">Accessories</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>

        <select value={sort} onChange={(event) => setSort(event.target.value)}>
          <option value="default">Sort By</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="listing-card" key={product.id}>
              <div className="listing-icon">{product.icon}</div>

              <p>{product.category}</p>

              <h3>{product.name}</h3>

              <strong>₹{product.price}</strong>

              <Link
                to={`/products/${product.id}`}
                className="view-details-button"
              >
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p className="no-products">No products found.</p>
        )}
      </div>
    </section>
  );
}

export default Products;
