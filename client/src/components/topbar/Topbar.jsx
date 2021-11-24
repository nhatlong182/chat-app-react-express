import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";

import "./topbar.scss";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <span className="logo">FakeBook</span>
      </div>
      <div className="topbar-center">
        <div className="search-bar">
          <SearchIcon className="search-icon" />
          <input type="text" placeholder="Tìm kiếm" className="search-input" />
        </div>
      </div>
      <div className="topbar-right">
        {/* <div className="topbar-link">
          <span className="topbar-link-item">Trang chủ</span>
          <span className="topbar-link-item">Thông báo</span>
        </div> */}

        <div className="topbar-icon">
          <img
            src="/assets/persons/1.jpg"
            alt="avatar"
            className="topbar-img"
          />
          <div className="topbar-icon-item">
            <PersonIcon />
            <span className="topbar-icon-count">1</span>
          </div>
          <div className="topbar-icon-item">
            <Link to="/messenger">
              <MessageIcon />
            </Link>
            <span className="topbar-icon-count">1</span>
          </div>
          <div className="topbar-icon-item">
            <NotificationsIcon />
            <span className="topbar-icon-count">1</span>
          </div>
        </div>
      </div>
    </div>
  );
}
