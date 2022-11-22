import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

import "./SideBar.css";

function SideBar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sideBar__recentItem">
      <span className="sideBar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sideBar">
      <div className="sideBar__top">
        <img src="Images/top_cover.jpeg" alt="" />
        <Avatar src={user?.profielUrl} className="sideBar__avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user?.displayName}</h2>
        <h4>{user?.email}</h4>
      </div>

      <div className="sideBar__status">
        <div className="sideBar__stat">
          <p>Who Viewed you</p>
          <p className="sideBar__statNumber">255</p>
        </div>
        <div className="sideBar__stat">
          <p> Viewed on post</p>
          <p className="sideBar__statNumber">255</p>
        </div>
      </div>

      <div className="sideBar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("developper ")}
        {recentItem("design ")}
      </div>
    </div>
  );
}

export default SideBar;
