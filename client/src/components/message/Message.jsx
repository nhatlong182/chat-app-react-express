import React from "react";

import "./message.scss";

export default function Message({ own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="message-top">
        <img src="./assets/persons/1.jpg" alt="" className="message-top-img" />
        <span className={own ? "message-top-text own" : "message-top-text"}>
          dáhdasjdhkjsahdjkashdsajkdhasjhdkjsahdkajsh
          dáhdasjdhkjsahdjkashdsajkdhasjhdkjsahdkajshdáhdasjdhkjsahdjkashdsajkdhasjhdkjsahdkajsh
        </span>
      </div>
      <div className="message-bottom">1 tiếng trước</div>
    </div>
  );
}
