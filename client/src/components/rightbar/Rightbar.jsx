import React from "react";

import "./rightbar.scss";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbar-wrapper">
        <h4 className="rightbar-ad">Quảng cáo</h4>
        <img src="/assets/ad.png" alt="ad" className="ad" />
        <h4 className="rightbar-title">Người liên hệ</h4>
        <ul className="friend-list">
          <li className="friend-list-item">
            <div className="friend-list-item-container">
              <img src="/assets/persons/6.jpg" alt="" className="friend-img" />
              <span className="friend-online"></span>
            </div>
            <span className="friend-name">johny Mạc</span>
          </li>
          <li className="friend-list-item">
            <div className="friend-list-item-container">
              <img src="/assets/persons/6.jpg" alt="" className="friend-img" />
              <span className="friend-online"></span>
            </div>
            <span className="friend-name">johny Mạc</span>
          </li>
          <li className="friend-list-item">
            <div className="friend-list-item-container">
              <img src="/assets/persons/6.jpg" alt="" className="friend-img" />
              <span className="friend-online"></span>
            </div>
            <span className="friend-name">johny Mạc</span>
          </li>
          <li className="friend-list-item">
            <div className="friend-list-item-container">
              <img src="/assets/persons/6.jpg" alt="" className="friend-img" />
              <span className="friend-online"></span>
            </div>
            <span className="friend-name">johny Mạc</span>
          </li>
          <li className="friend-list-item">
            <div className="friend-list-item-container">
              <img src="/assets/persons/6.jpg" alt="" className="friend-img" />
              <span className="friend-online"></span>
            </div>
            <span className="friend-name">johny Mạc</span>
          </li>
          <li className="friend-list-item">
            <div className="friend-list-item-container">
              <img src="/assets/persons/6.jpg" alt="" className="friend-img" />
              <span className="friend-online"></span>
            </div>
            <span className="friend-name">johny Mạc</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
