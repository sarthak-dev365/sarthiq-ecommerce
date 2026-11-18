
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/login.css";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleLogin(event) {
        event.preventDefault();

        try {
            setLoading(true);

            const response = await fetch(
                "http://localhost:5000/api/users/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email,
                        password
                    })
                }
            );

            const data = await response.json();
            console.log("data", data);
            if (!response.ok) {
                throw new Error(
                    data.message || "Login failed"
                );
            }

            // Check JWT Token
            if (!data.token) {
                throw new Error("Token not received from server");
            }

            // Save Token in Local Storage
            localStorage.setItem("token", data.token);

            alert("Login successful!");

            navigate("/");

        } catch (error) {
            console.error("Login Error:", error);
            alert(error.message);

        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="login-page">

            <div className="login-card">

                <div className="login-brand">
                    <Link to="/" className="login-logo">
                        Sarthiq
                    </Link>

                    <p>Welcome Back!</p>
                    <span>Login to continue shopping.</span>
                </div>

                <form onSubmit={handleLogin}>

                    <div className="form-group">
                        <label>Email Address</label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(event) =>
                                setEmail(event.target.value)
                            }
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="login-button"
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login to Account"}
                    </button>

                </form>

                <div className="login-footer">
                    <p>
                        Don't have an account?
                        {" "}
                        <Link to="/register">Create Account</Link>
                    </p>

                    <Link to="/">Back to Home</Link>
                </div>

            </div>

        </div>
    );
}

export default Login;
