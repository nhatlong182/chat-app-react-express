import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Users } from "../../FakeData.js";

import "./post.scss";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLike, setIsLike] = useState(false);

  const likeHandler = () => {
    setLike(isLike ? like - 1 : like + 1);
    setIsLike(!isLike);
  };

  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-wrapper-top">
          <div className="post-wrapper-top-left">
            <img
              src={
                Users.filter((user) => user.id === post.userId)[0]
                  .profilePicture
              }
              alt=""
              className="post-profile-image"
            />
            <span className="post-username">
              {Users.filter((user) => user.id === post.userId)[0].username}
            </span>
            <span className="post-time">{post.date}</span>
          </div>
          <div className="post-wrapper-top-right">
            <MoreVertIcon className="post-more-icon" />
          </div>
        </div>
        <div className="post-wrapper-center">
          <span className="post-text">{post.desc}</span>
          <img src={post.photo} alt="post" className="post-img" />
        </div>
        <div className="post-wrapper-bottom">
          <div className="post-wrapper-bottom-left">
            <img
              src="./assets/like.png"
              alt="like"
              className="like-icon"
              onClick={likeHandler}
            />
            <img
              src="./assets/heart.png"
              alt="heart"
              className="like-icon"
              onClick={likeHandler}
            />
            <span className="like-count">{like} lượt thích</span>
          </div>
          <div className="post-wrapper-bottom-right">
            <span className="post-comment">{post.comment} bình luận</span>
          </div>
        </div>
      </div>
    </div>
  );
}
