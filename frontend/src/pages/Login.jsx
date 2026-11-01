
import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/login.css";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(event) {
        event.preventDefault();

        console.log("Email:", email);
        console.log("Password:", password);
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

                    <button type="submit" className="login-button">
                        Login to Account
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
