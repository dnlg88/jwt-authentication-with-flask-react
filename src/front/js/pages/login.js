import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { JavascriptModulesPlugin } from "webpack";

import { Context } from "../store/appContext";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const { email, setEmail } = useState("");
  const { password, setPassword } = useState("");

  const handleClick = () => {
    const requestOptions = {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: [password],
      }),
    };
    fetch(
      "https://3001-dnlg88-jwtauthenticatio-amswopmg168.ws-eu59.gitpod.io/api/token",
      requestOptions
    )
      .then()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section
      className="h-100 gradient-form"
      //   style={{ backgroundColor: "#eee" }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        style={{ width: "185px" }}
                        alt="logo"
                      />
                      <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                    </div>

                    <form>
                      <p>Please login to your account</p>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          value={email}
                          class="form-control"
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        {/* <label className="form-label" for="form2Example11">
                          Username
                        </label> */}
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          value={password}
                          class="form-control"
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="button"
                          onClick={handleClick}
                        >
                          Log in
                        </button>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                        >
                          Create new
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">We are more than just a company</h4>
                    <p className="small mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
