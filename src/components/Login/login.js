import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./login.css"; // Import your CSS file

class LoginPage extends React.Component {
  handleLogin = (event) => {
    event.preventDefault();
    // Your login logic here
  };

  handleForgotPassword = () => {
    // Redirect or trigger forgot password flow
  };

  render() {
    return (
      <div className="login-container">
        <br></br>
        <h2>Login</h2>
        <form onSubmit={this.handleLogin}>
          <div className="input-group">
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="forgot-password">
            <a href="#" onClick={this.handleForgotPassword}>
              Forgot password?
            </a>
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
          <div className="signup-link">
            <span>Don't have an account?</span>
            <Link to="/signup">Sign Up</Link>{" "}
            {/* Use Link component to navigate to signup page */}
            <br></br>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;
