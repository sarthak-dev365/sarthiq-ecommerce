const User = require('../models/userModel');
const generateToken = require('../utils/generateToken');

// Register a new user
exports.registerUser = async (req, res) => {
  console.log("Register user called");
  try {
    const { name, email, password, address, phone } = req.body;

    // Check if user already exists
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please provide all required fields" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user instance
    const user = new User({
      name,
      email,
      password,
      address,
      phone
    });

    // Save the user to the database
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Login a user
exports.loginUser = async (req, res) => {
  console.log("Login user called");
  try {
    const { email, password } = req.body;

    // Check if user already exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Check if password is correct
   const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({message: "Invalid credentials"});
    } 

    // if (user.password !== password) {
    //   return res.status(400).json({ message: "Invalid credentials" });
    // }
    // Generate JWT Token
    const token = generateToken(user._id, user.role);

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

