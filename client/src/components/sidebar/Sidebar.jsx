import React from "react";
import GroupIcon from "@mui/icons-material/Group";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import EventIcon from "@mui/icons-material/Event";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import FlagIcon from "@mui/icons-material/Flag";
import PeopleTwoToneIcon from "@mui/icons-material/PeopleTwoTone";

import "./sidebar.scss";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <ul className="sidebar-wrapper-list">
          <li className="sidebar-wrapper-list-item">
            <GroupIcon className="sidebar-wrapper-list-item-icon" />
            <span className="sidebar-wrapper-list-item-text">Bạn bè</span>
          </li>
          <li className="sidebar-wrapper-list-item">
            <BookmarkIcon className="sidebar-wrapper-list-item-icon" />
            <span className="sidebar-wrapper-list-item-text">Đã lưu</span>
          </li>
          <li className="sidebar-wrapper-list-item">
            <PeopleAltOutlinedIcon className="sidebar-wrapper-list-item-icon" />
            <span className="sidebar-wrapper-list-item-text">Nhóm</span>
          </li>
          <li className="sidebar-wrapper-list-item">
            <OndemandVideoIcon className="sidebar-wrapper-list-item-icon" />
            <span className="sidebar-wrapper-list-item-text">Watch</span>
          </li>
          <li className="sidebar-wrapper-list-item">
            <EventIcon className="sidebar-wrapper-list-item-icon" />
            <span className="sidebar-wrapper-list-item-text">Sự kiện</span>
          </li>
          <li className="sidebar-wrapper-list-item">
            <WbSunnyOutlinedIcon className="sidebar-wrapper-list-item-icon" />
            <span className="sidebar-wrapper-list-item-text">Thời tiết</span>
          </li>
          <li className="sidebar-wrapper-list-item">
            <FlagIcon className="sidebar-wrapper-list-item-icon" />
            <span className="sidebar-wrapper-list-item-text">Trang</span>
          </li>
        </ul>
        <button className="sidebar-wrapper-btn">Xem thêm</button>
        <hr className="sidebar-hr" />
        <ul className="sidebar-wrapper-grouplist">
          <li className="sidebar-wrapper-list-item">
            <PeopleTwoToneIcon className="sidebar-wrapper-list-item-icon" />
            <span className="sidebar-wrapper-list-item-text">Nhóm 1</span>
          </li>
          <li className="sidebar-wrapper-list-item">
            <PeopleTwoToneIcon className="sidebar-wrapper-list-item-icon" />
            <span className="sidebar-wrapper-list-item-text">Nhóm 2</span>
          </li>
          <li className="sidebar-wrapper-list-item">
            <PeopleTwoToneIcon className="sidebar-wrapper-list-item-icon" />
            <span className="sidebar-wrapper-list-item-text">Nhóm 3</span>
          </li>
          <li className="sidebar-wrapper-list-item">
            <PeopleTwoToneIcon className="sidebar-wrapper-list-item-icon" />
            <span className="sidebar-wrapper-list-item-text">Nhóm 4</span>
          </li>
          <li className="sidebar-wrapper-list-item">
            <PeopleTwoToneIcon className="sidebar-wrapper-list-item-icon" />
            <span className="sidebar-wrapper-list-item-text">Nhóm 5</span>
          </li>
          <li className="sidebar-wrapper-list-item">
            <PeopleTwoToneIcon className="sidebar-wrapper-list-item-icon" />
            <span className="sidebar-wrapper-list-item-text">Nhóm 5</span>
          </li>
          <li className="sidebar-wrapper-list-item">
            <PeopleTwoToneIcon className="sidebar-wrapper-list-item-icon" />
            <span className="sidebar-wrapper-list-item-text">Nhóm 5</span>
          </li>
          <li className="sidebar-wrapper-list-item">
            <PeopleTwoToneIcon className="sidebar-wrapper-list-item-icon" />
            <span className="sidebar-wrapper-list-item-text">Nhóm 5</span>
          </li>
          <button className="sidebar-wrapper-btn">Xem thêm</button>
        </ul>
      </div>
    </div>
  );
}
