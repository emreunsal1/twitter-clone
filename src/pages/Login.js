import React, { useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { mainContext } from "../context";
import { user } from "../data";
import { ReactComponent as TwitterIcon } from "../components/icons/twitter.svg";
import "../style/login.scss";

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
    <div className="login-container">
      <div className="login-icon">
        <TwitterIcon />
      </div>
      <div className="login-content">
        <form onSubmit={(e) => userControl(e)}>
          <input name="userName" placeholder="User Name" type="text"></input>
          <label className="user-label">User Name</label>
          <input name=" password" placeholder="Password" type="text"></input>
          <label className="password-label">Password</label>

          <button name="button" type="submit">
            Giriş
          </button>
        </form>
        <Link to="./register"></Link>
      </div>
    </div>
  );
}
