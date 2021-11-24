import React from "react";
import Conversation from "../../components/conversation/Conversation.jsx";
import Message from "../../components/message/Message.jsx";
import Topbar from "../../components/topbar/Topbar.jsx";

import "./messenger.scss";

export default function Messenger() {
  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chat-menu">
          <div className="chat-menu-wrapper">
            <input
              placeholder="Tìm kiếm..."
              type="text"
              className="chat-menu-input"
            />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
          </div>
        </div>
        <div className="chat-box">
          <div className="chat-box-wrapper">
            <div className="chat-box-top">
              <Message />
              <Message own={true} />
              <Message />
              <Message />
              <Message own={true} />
              <Message />
              <Message />
              <Message own={true} />
              <Message />
              <Message />
              <Message own={true} />
              <Message />
            </div>
            <div className="chat-box-bottom">
              <textarea className="chat-input" placeholder="Aa"></textarea>
              <button className="send-btn">Gửi</button>
            </div>
          </div>
        </div>
        <div className="chat-online">
          <div className="chat-online-wrapper">online</div>
        </div>
      </div>
    </>
  );
}
