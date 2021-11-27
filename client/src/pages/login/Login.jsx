import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../redux/action/userAction.js";

import "./login.scss";

export default function Login(props) {
  const user = useSelector((state) => state.userSignin);
  const { error, userInfo } = user;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push("/home");
    }
  }, [props.history, userInfo]);

  return (
    <>
      {error && error.message}
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
    </>
  );
}
