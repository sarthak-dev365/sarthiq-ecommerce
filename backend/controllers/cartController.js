
const Cart = require("../models/cartModel");

const addToCart = async (req, res) => {
  try {
    const { productId, quantity, iswishlisted } = req.body;

    const userId = req.user._id;

    // Check Product ID and Quantity
    if (!productId || quantity === undefined || quantity === null || quantity === "") {
      return res.status(400).json({
        message: "Product ID and quantity are required",
      });
    }

    const productQuantity = Number(quantity);

    // Check Quantity
    if (!Number.isInteger(productQuantity) || productQuantity <= 0) {
      return res.status(400).json({
        message: "Quantity must be a positive integer",
      });
    }

    // Check whether Product already exists in User's Cart
    const cartItem = await Cart.findOne({
      userId,
      "items.productId": productId,
    });

    if (cartItem) {
      const existingItem = cartItem.items.find(
        (item) => item.productId.toString() === productId
      );

      if (existingItem) {
        existingItem.quantity += productQuantity;
      }
    } else {
      // Product is not in Cart
      const newCart = new Cart({
        userId,
        items: [
          {
            productId,
            quantity: productQuantity,
            isWishlist: false,
          },
        ],
      });

      await newCart.save();
    }

  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

module.exports = { addToCart };
