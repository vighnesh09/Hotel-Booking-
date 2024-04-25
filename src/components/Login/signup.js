import React from "react";
import "./login.css"; // Import your CSS file

class SignUpPage extends React.Component {
  handleSignUp = (event) => {
    event.preventDefault();
    // Your signup logic here
  };

  render() {
    return (
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSignUp}>
          <div className="input-group">
            <input type="text" name="name" placeholder="Name" required />
          </div>
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
          <div className="input-group">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
            />
          </div>
          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default SignUpPage;
