import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Home</span>
        </Link>
        <div className="actions">
          <Link to="/login">
            <a>Login</a>
          </Link>
          <Link to="/signup">
            <a>Signup</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};
