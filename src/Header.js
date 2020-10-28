import React, {useState, useEffect} from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";

import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import {Link} from "react-router-dom";
import Searchbar from "./Searchbar";



export default function Header() {






  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/"> 
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          alt="YouTube Logo"
        />
        </Link>

      </div>
      <div className="header__input">
       <Searchbar/>
      </div>

      
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          alt="Remy Sharp"
          src="https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"
        />


      </div>


{/* {searchResults.map((items,index) => (
<SearchPage
key={index}
views={items.views}
subs={items.subs}
description={items.description}
timetamp={items.timestamp}
channel={items.channel}
title={items.title}
channelImage={items.channelImage}
/>
))} */}



      

    </div>
  );
}
