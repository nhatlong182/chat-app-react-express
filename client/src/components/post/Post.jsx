import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import "./post.scss";

export default function Post() {
  const [like, setLike] = useState(1);
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
              src="/assets/persons/2.jpg"
              alt=""
              className="post-profile-image"
            />
            <span className="post-username">jacob Trần</span>
            <span className="post-time">5 phút trước</span>
          </div>
          <div className="post-wrapper-top-right">
            <MoreVertIcon className="post-more-icon" />
          </div>
        </div>
        <div className="post-wrapper-center">
          <span className="post-text">Đây là bài viết</span>
          <img src="/assets/posts/1.jpg" alt="post" className="post-img" />
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
            <span className="post-comment">10 bình luận</span>
          </div>
        </div>
      </div>
    </div>
  );
}
