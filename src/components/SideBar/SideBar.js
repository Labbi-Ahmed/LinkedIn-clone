import { Avatar } from "@mui/material";
import React from "react";
import "./SideBar.css";

function SideBar() {
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
        <Avatar src="Images/me.jpg" className="sideBar__avatar" />
        <h2>Labbi Ahmed</h2>
        <h4>labbi5689@gmail.com</h4>
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
