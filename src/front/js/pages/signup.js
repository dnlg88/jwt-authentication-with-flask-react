import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Signup = (props) => {
  const { store, actions } = useContext(Context);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const isSigned = actions.signup(username, password);
    const isLogged = actions.login(username, password);
    if (isSigned && isLogged) navigate("/");
  };

  return (
    <div className="signup d-flex flex-column justify-content-center align-items-center">
      <div className="row py-4 text-center">
        <h1 className="d-block mx-auto mb-3 py-2 fw-bold ">Signup</h1>
        <div className="row">
          <div className="col mb-3">
            <input
              className="w-100"
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="col mb-3">
            <input
              className="w-100"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col mb-3">
            <a type="submit" onClick={handleSubmit} className="w-50 button">
              Signup
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
