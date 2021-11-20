import React from "react";
import Share from "../share/Share";
import Post from "../post/Post";

import "./feed.scss";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feed-wrapper">
        <Share />
        <Post />
      </div>
    </div>
  );
}
