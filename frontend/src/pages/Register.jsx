
import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/register.css";

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [terms, setTerms] = useState(false);

    function handleRegister(event) {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        if (!terms) {
            alert("Please accept Terms & Conditions.");
            return;
        }

        console.log("Registration Details:", {
            name,
            email,
            phone
        });
    }

    return (
        <div className="register-page">

            <div className="register-card">

                <div className="register-heading">
                    <Link to="/" className="register-logo">
                        Sarthiq
                    </Link>

                    <h1>Create Account</h1>

                    <p>Join Sarthiq and start shopping smarter.</p>
                </div>

                <form onSubmit={handleRegister}>

                    <div className="register-form-group">
                        <label>Full Name</label>

                        <input
                            type="text"
                            placeholder="Enter your full name"
                            value={name}
                            onChange={(event) =>
                                setName(event.target.value)
                            }
                            required
                        />
                    </div>

                    <div className="register-form-group">
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

                    <div className="register-form-group">
                        <label>Mobile Number</label>

                        <input
                            type="tel"
                            placeholder="Enter 10-digit mobile number"
                            value={phone}
                            onChange={(event) =>
                                setPhone(event.target.value)
                            }
                            pattern="[0-9]{10}"
                            required
                        />
                    </div>

                    <div className="register-form-group">
                        <label>Password</label>

                        <input
                            type="password"
                            placeholder="Create a password"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            minLength="8"
                            required
                        />
                    </div>

                    <div className="register-form-group">
                        <label>Confirm Password</label>

                        <input
                            type="password"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(event) =>
                                setConfirmPassword(event.target.value)
                            }
                            required
                        />
                    </div>

                    <label className="terms-label">
                        <input
                            type="checkbox"
                            checked={terms}
                            onChange={(event) =>
                                setTerms(event.target.checked)
                            }
                        />

                        <span>
                            I agree to the Terms & Conditions.
                        </span>
                    </label>

                    <button
                        type="submit"
                        className="register-button"
                    >
                        Create Account
                    </button>

                </form>

                <div className="register-footer">
                    <p>
                        Already have an account?
                        {" "}
                        <Link to="/login">Login</Link>
                    </p>

                    <Link to="/">Back to Home</Link>
                </div>

            </div>

        </div>
    );
}

export default Register;
