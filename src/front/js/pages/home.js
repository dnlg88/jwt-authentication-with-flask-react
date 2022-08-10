import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <section
      className="pt-5 pb-5 mt-0 align-items-center d-flex bg-dark"
      style={{
        height: "100vh",
        backgroundSize: "cover",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-0.3.5&s=c3d0603820b595592d80f5a239938c67&auto=format&fit=crop&w=1500&q=80)",
      }}
    >
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center d-flex text-center h-100">
          <div className="col-12 col-md-8  h-50 ">
            <h1 className="display-2  text-light mb-2 mt-5">
              <strong>Authentication Demo</strong>
            </h1>
            <p className="lead  text-light mb-5">
              Check out my login and sign-up pages
            </p>
            <p>
              <Link to="/login">
                <a
                  href="#"
                  className="btn bg-success shadow-lg btn-round text-light btn-lg btn-rised"
                >
                  Login
                </a>
              </Link>
            </p>
            <p>
              <Link to="/signup">
                <a
                  href="#"
                  className="btn bg-primary shadow-lg btn-round text-light btn-lg btn-rised"
                >
                  Signup
                </a>
              </Link>
            </p>

            <div className="btn-container-wrapper p-relative d-block  zindex-1">
              <a
                className="btn btn-link btn-lg   mt-md-3 mb-4 scroll align-self-center text-light"
                href="#"
              >
                <i className="fa fa-angle-down fa-4x text-light"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
