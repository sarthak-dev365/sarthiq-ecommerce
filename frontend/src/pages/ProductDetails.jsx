import { useParams } from "react-router-dom";
import { useCart } from "../context/context.jsx";
import "../styles/product-details.css";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 799,
      category: "Electronics",
      icon: "🎧",
      description:
        "Enjoy your favourite music with comfortable wireless headphones.",
      stock: 15,
    },
    {
      id: 2,
      name: "Notebook Set",
      price: 199,
      category: "Stationery",
      icon: "📚",
      description: "A useful notebook set for everyday learning and writing.",
      stock: 30,
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 1299,
      category: "Accessories",
      icon: "⌚",
      description: "A stylish smartwatch for your everyday lifestyle.",
      stock: 8,
    },
    {
      id: 4,
      name: "Travel Backpack",
      price: 599,
      category: "Lifestyle",
      icon: "🎒",
      description: "A practical backpack for travel and daily use.",
      stock: 12,
    },
  ];

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <h2>Product not found.</h2>;
  }

  return (
    <section className="product-details-page">
      <div className="details-image">
        <span>{product.icon}</span>
      </div>

      <div className="details-content">
        <p className="details-category">{product.category}</p>

        <h1>{product.name}</h1>

        <h2>₹{product.price}</h2>

        <p className="details-description">{product.description}</p>

        <p className="stock-status">
          {product.stock > 0
            ? `In Stock (${product.stock} available)`
            : "Out of Stock"}
        </p>

        <button
          type="button"
          disabled={product.stock === 0}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
}

export default ProductDetails;
