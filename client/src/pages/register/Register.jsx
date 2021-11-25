import React from "react";

import "./register.scss";

export default function Login() {
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-wrapper-left">
          <h3 className="login-logo">LongSocialApp </h3>
          <span className="login-text">Kết nối với mọi người</span>
        </div>
        <div className="login-wrapper-right">
          <form action="" className="login-form">
            <input
              className="login-input"
              type="text"
              id="username"
              placeholder="Tên đăng nhập"
              required
              onChange={(e) => {}}
            ></input>
            <input
              className="login-input"
              type="email"
              id="email"
              placeholder="Email"
              required
              onChange={(e) => {}}
            ></input>
            <input
              className="login-input"
              type="password"
              id="password"
              placeholder="Mật khẩu"
              required
              onChange={(e) => {}}
            ></input>
            <input
              className="login-input"
              type="password"
              id="password"
              placeholder="Xác nhận mật khẩu"
              required
              onChange={(e) => {}}
            ></input>
            <button className="login-submit" type="submit">
              Đăng ký
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
