
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState([]);

    function addToCart(product) {
        setCartItems((previousItems) => {
            const existingProduct = previousItems.find(
                (item) => item.id === product.id
            );

            if (existingProduct) {
                return previousItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [
                ...previousItems,
                { ...product, quantity: 1 }
            ];
        });
    }

    function removeFromCart(productId) {
        setCartItems((previousItems) =>
            previousItems.filter((item) => item.id !== productId)
        );
    }

    function updateQuantity(productId, quantity) {
        if (quantity < 1) return;

        setCartItems((previousItems) =>
            previousItems.map((item) =>
                item.id === productId
                    ? { ...item, quantity }
                    : item
            )
        );
    }

    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const cartTotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateQuantity,
                cartCount,
                cartTotal
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
    return useContext(CartContext);
};
