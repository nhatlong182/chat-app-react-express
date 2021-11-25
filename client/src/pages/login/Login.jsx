import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../apiCall.js";
import { AuthContext } from "../../context/AuthContext.js";

import "./login.scss";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
    console.log(user);
    if (user != null) {
      props.history.push("/home");
    }
  };

  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-wrapper-left">
          <h3 className="login-logo">LongSocialApp </h3>
          <span className="login-text">Kết nối với mọi người</span>
        </div>
        <div className="login-wrapper-right">
          <form className="login-form" onSubmit={handleLogin}>
            <input
              className="login-input"
              type="email"
              id="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              className="login-input"
              type="password"
              id="password"
              placeholder="Mật khẩu"
              required
              onChange={(e) => setPassword(e.target.value)}
            ></input>

            <button className="login-submit" type="submit">
              Đăng nhập
            </button>
            <span className="register">
              Chưa có tài khoản? <Link to="/register">đăng ký</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
