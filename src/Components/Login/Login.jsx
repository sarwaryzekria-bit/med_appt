import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../config";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle login form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    // Check that all fields are filled
    if (!formData.email || !formData.password) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed.");
      }

      // Save authentication information if returned by the backend
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      setSuccess("Login successful!");

      // Redirect to the home page
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      setError(error.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">

        {/* Login Header */}
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Log in to your account</p>
        </div>

        {/* Error Message */}
        {error && <div className="error-message">{error}</div>}

        {/* Success Message */}
        {success && <div className="success-message">{success}</div>}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="login-form">

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password">Password</label>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Forgot Password */}
          <div className="forgot-password">
            <span onClick={() => navigate("/forgot-password")}>
              Forgot Password?
            </span>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="login-button"
            disabled={loading}
          >
            {loading ? "Logging In..." : "Log In"}
          </button>
        </form>

        {/* Signup Link */}
        <div className="signup-link">
          <p>
            Don't have an account?{" "}
            <span onClick={() => navigate("/signup")}>
              Sign Up
            </span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;
