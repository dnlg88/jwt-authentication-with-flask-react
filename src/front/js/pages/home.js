import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div
      style={{ height: "75vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="row text-center">
        <div className="col-12 col-md-8">
          <h1 className="display-3 text-light mb-2 mt-5 text-dark">
            <strong>Authentication Demo</strong>
          </h1>
          <p className="lead  text-dark mb-5">
            Check out my login and sign-up pages
          </p>
          <div className="d-flex justify-content-around">
            <p>
              <Link to="/login">
                <a
                  href="#"
                  className="btn btn-secondary shadow-lg btn-round text-light btn-lg btn-rised"
                >
                  Login
                </a>
              </Link>
            </p>
            <p>
              <Link to="/signup">
                <a
                  href="#"
                  className="btn btn-dark shadow-lg btn-round text-light btn-lg btn-rised"
                >
                  Signup
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
