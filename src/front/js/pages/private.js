import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Private = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    actions.getTokenFromSession();
  }, []);
  return (
    <>
      {!store.token ||
      store.token === null ||
      store.token === "" ||
      store.token === undefined ? (
        <img
          className="square"
          src="https://www.pngmart.com/files/7/Unauthorized-Sign-Transparent-Background.png"
        />
      ) : (
        <img
          className="square"
          src="https://i.pinimg.com/originals/f2/d1/e3/f2d1e30ce6fffc156c56f164275f5f7c.gif"
        />
      )}
    </>
  );
};
