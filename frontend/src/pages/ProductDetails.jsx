
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/context.jsx";
import "../styles/product-details.css";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/products/${id}`
        );

        if (!response.ok) {
          throw new Error("Product not found");
        }

        const data = await response.json();

        setProduct({
          ...data,
          id: data._id,
        });

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <h2>Loading product...</h2>;
  }

  if (error || !product) {
    return <h2>Product not found.</h2>;
  }

  return (
    <section className="product-details-page">
      <div className="details-image">
        {product.image?.startsWith("http") ? (
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        ) : (
          <span>📦</span>
        )}
      </div>

      <div className="details-content">
        <p className="details-category">{product.category}</p>

        <h1>{product.name}</h1>

        <h2>₹{product.price}</h2>

        <p className="details-description">
          {product.description}
        </p>

        <p className="stock-status">
          Stock information unavailable
        </p>

        <button
          type="button"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
}

export default ProductDetails;
