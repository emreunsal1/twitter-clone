import React, { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { mainContext } from "../context";
import { user } from "../data";
import { ReactComponent as TwitterIcon } from "../components/icons/twitter.svg";

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
          <div className="input-group">
            <input
              name="userName"
              className="input-username"
              type="text"
              value="kaan"
              required
            ></input>
            <label className="username">User Name</label>
          </div>
          <div className="input-group">
            <input
              name="password"
              className="input-password"
              value="kaan"
              type="text"
              required
            ></input>
            <label className="password">Password</label>
          </div>

          <button name="button" type="submit">
            Giriş
          </button>
        </form>
        <Link to="./register"></Link>
      </div>
    </div>
  );
}
