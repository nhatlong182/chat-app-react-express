import React from "react";
import Share from "../share/Share";
import Post from "../post/Post";
import { Posts } from "../../FakeData.js";

import "./feed.scss";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feed-wrapper">
        <Share />
        {Posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
