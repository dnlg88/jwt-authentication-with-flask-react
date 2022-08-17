import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Signup = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <div className="signup d-flex flex-column justify-content-center align-items-center">
      <div className="row py-4 text-center">
        <h1 className="d-block mx-auto mb-3 py-2 fw-bold ">Signup</h1>
        <div className="row">
          <div className="col mb-3">
            <input className="w-100" placeholder="Name" />
          </div>
          <div className="col mb-3">
            <input className="w-100" placeholder="Last name" />
          </div>
        </div>
        <div className="row">
          <div className="col mb-3">
            <input className="w-100" placeholder="Username" />
          </div>
          <div className="col mb-3">
            <input className="w-100" placeholder="Password" />
          </div>
        </div>
        <div className="row">
          <div className="col mb-3">
            <a type="submit" className="w-50 button">
              Signup
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
