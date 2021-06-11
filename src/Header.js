import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/100px-Netflix_2015_logo.svg.png"
          alt="#"
        />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>News</li>
          <li>Movies</li>
        </ul>
      </div>
      <div className="header_right">
        <SearchIcon />
        <NotificationsIcon />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
