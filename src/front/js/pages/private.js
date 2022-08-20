import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Private = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  return (
    <>
      {store.token === null ||
      store.token === "" ||
      store.token === undefined ? (
        navigate("/login")
      ) : (
        <img
          className="square"
          src="https://i.pinimg.com/originals/f2/d1/e3/f2d1e30ce6fffc156c56f164275f5f7c.gif"
        />
      )}
    </>
  );
};
