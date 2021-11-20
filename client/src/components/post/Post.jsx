import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import "./post.scss";

export default function Post() {
  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-wrapper-top">
          <div className="post-wrapper-top-left">
            {/* <img
              src="/assets/persons/1.jpg"
              alt=""
              className="post-profile-image"
            /> */}
            <span className="post-username">jacob Trần</span>
            <span className="post-time">5 phút trước</span>
          </div>
          <div className="post-wrapper-top-right">
            <MoreVertIcon />
          </div>
        </div>
        <div className="post-wrapper-center"></div>
        <div className="post-wrapper-bottom"></div>
      </div>
    </div>
  );
}
