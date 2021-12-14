import React, { useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { mainContext } from "../context";
import { user } from "../data";

export default function Login() {
  const context = useContext(mainContext);

  let history = useHistory();

  const userControl = (e) => {
    e.preventDefault();

    const login = user.find(
      (data) =>
        data.userName === e.target.userName.value ||
        data.password === e.target.password.value
    );
    if (login) {
      context.user.setUserInfo(login);
      history.push("/main");
    }
  };

  return (
    <div>
      <form onSubmit={(e) => userControl(e)}>
        <input name="userName" type="text"></input>
        <input name="password" type="text"></input>
        <button name="button" type="submit">
          Giriş
        </button>
      </form>
      <Link to="./register"></Link>
    </div>
  );
}
