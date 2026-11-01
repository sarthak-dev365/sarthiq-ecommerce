
import { Link } from "react-router-dom";
import { useCart } from "../context/context.jsx";
import "../styles/cart.css";

function Cart() {

    const {
        cartItems,
        removeFromCart,
        updateQuantity,
        cartTotal
    } = useCart();

    return (
        <section className="cart-page">

            <h1>My Shopping Cart</h1>

            {cartItems.length === 0 ? (

                <div className="empty-cart">
                    <span>🛒</span>
                    <h2>Your Cart is Empty</h2>
                    <p>Explore products and add your favourites.</p>

                    <Link to="/products">
                        Continue Shopping
                    </Link>
                </div>

            ) : (

                <div className="cart-layout">

                    <div className="cart-items">

                        {cartItems.map((item) => (
                            <div className="cart-item" key={item.id}>

                                <div className="cart-item-icon">
                                    {item.icon}
                                </div>

                                <div className="cart-item-info">
                                    <h3>{item.name}</h3>
                                    <strong>₹{item.price}</strong>

                                    <div className="quantity-controls">

                                        <button
                                            onClick={() =>
                                                updateQuantity(
                                                    item.id,
                                                    item.quantity - 1
                                                )
                                            }
                                            disabled={item.quantity === 1}
                                        >
                                            -
                                        </button>

                                        <span>{item.quantity}</span>

                                        <button
                                            onClick={() =>
                                                updateQuantity(
                                                    item.id,
                                                    item.quantity + 1
                                                )
                                            }
                                        >
                                            +
                                        </button>

                                    </div>

                                    <button
                                        className="remove-button"
                                        onClick={() =>
                                            removeFromCart(item.id)
                                        }
                                    >
                                        Remove
                                    </button>
                                </div>

                                <strong>
                                    ₹{item.price * item.quantity}
                                </strong>

                            </div>
                        ))}

                    </div>

                    <div className="cart-summary">
                        <h2>Order Summary</h2>

                        <div className="summary-row">
                            <span>Subtotal</span>
                            <strong>₹{cartTotal}</strong>
                        </div>

                        <div className="summary-row">
                            <span>Delivery</span>
                            <strong>Free</strong>
                        </div>

                        <div className="summary-total">
                            <span>Total</span>
                            <strong>₹{cartTotal}</strong>
                        </div>

                        <Link to="/checkout">
                            Proceed to Checkout
                        </Link>
                    </div>

                </div>

            )}

        </section>
    );
}

export default Cart;
