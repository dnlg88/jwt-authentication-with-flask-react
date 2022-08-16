import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
  return (
    <div className="login d-flex flex-column justify-content-center align-items-center">
      <div className="row py-4 text-center">
        <h1 className="d-block mx-auto mb-3 py-2 fw-bold ">Login</h1>
        <div className="row">
          <div className="col mb-3">
            <input className="w-50" placeholder="Username" />
          </div>
        </div>
        <div className="row">
          <div className="col mb-3">
            <input className="w-50" placeholder="Password" />
          </div>
        </div>
        <div className="row">
          <div className="col mb-3">
            <a type="submit" className="w-50 button">
              Do it
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
