import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Home</span>
        </Link>
        <div className="actions">
          {store.token === null ? (
            <Link to="/login">
              <a>Login</a>
            </Link>
          ) : (
            <>
              <a href="#" className="me-2" onClick={actions.logout}>
                Logout
              </a>
              <Link to={"private"}>
                <a className="me-2">Private</a>
              </Link>
            </>
          )}
          <Link to="/signup">
            <a>Signup</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};
