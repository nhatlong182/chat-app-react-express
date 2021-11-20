import React from "react";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import VideocamIcon from "@mui/icons-material/Videocam";

import "./share.scss";

export default function Share() {
  return (
    <div className="share">
      <div className="share-wrapper">
        <div className="share-wrapper-top">
          <img src="/assets/persons/1.jpg" alt="" className="share-img" />
          <input
            type="text"
            placeholder="Bạn đang nghĩ gì ?"
            className="share-input"
          />
        </div>
        <hr className="share-Hr" />
        <div className="share-wrapper-bottom">
          <div className="share-options">
            <div className="share-options-item">
              <VideocamIcon htmlColor="red" className="share-options-icon" />
              <span className="share-options-text">Video trực tiếp</span>
            </div>
            <div className="share-options-item">
              <PermMediaIcon htmlColor="green" className="share-options-icon" />
              <span className="share-options-text">Ảnh / video</span>
            </div>
            <div className="share-options-item">
              <InsertEmoticonIcon
                htmlColor="yellow"
                className="share-options-icon"
              />
              <span className="share-options-text">Cảm xúc / hoạt động</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
