import React, { useEffect } from "react";
import { useMainContext } from "../context";
import { user } from "../data";
import { ReactComponent as TwitterIcon } from "../components/icons/twitter.svg";

export default function Login() {
  const context = useMainContext();
  const { setUserInfo } = context.user;
  const { history } = context;

  useEffect(() => {}, []);

  const userControl = (e) => {
    e.preventDefault();

    const login = user.find(
      (user) =>
        user.userName === e.target.userName.value ||
        user.password === e.target.password.value
    );

    if (login) {
      localStorage.setItem("userInfo", login.id);
      setUserInfo(login);
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
              value="emre.json"
              required
            ></input>
            <label className="username">User Name</label>
          </div>
          <div className="input-group">
            <input
              name="password"
              className="input-password"
              value="emre"
              type="text"
              required
            ></input>
            <label className="password">Password</label>
          </div>

          <button name="button" type="submit">
            Giriş
          </button>
        </form>
      </div>
    </div>
  );
}
