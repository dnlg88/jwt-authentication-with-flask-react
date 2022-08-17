import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router";
import { Context } from "../store/appContext";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const history = useHistory();

  const handleClick = () => {
    actions.login(username, password);
  };

  // if (store.token && store.token !== undefined && store.token !== "")
  //   history.push("/");

  return (
    <div className="login d-flex flex-column justify-content-center align-items-center">
      <div className="row py-4 text-center">
        <h1 className="d-block mx-auto mb-3 py-2 fw-bold ">Login</h1>
        <div className="row">
          <div className="col mb-3">
            <input
              className="w-50"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </div>
        </div>
        <div className="row">
          <div className="col mb-3">
            <input
              type="password"
              className="w-50"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
        </div>
        <div className="row">
          <div className="col mb-3">
            <a type="submit" onClick={handleClick} className="w-50 button">
              Do it
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
