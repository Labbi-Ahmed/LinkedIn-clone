import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import InputOption from "./InputOption";
import "./Post.css";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";

const Post = forwardRef(({ name, discription, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}></Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{discription}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post_button">
        <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
        <InputOption Icon={ChatIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareIcon} title="Share" color="gray" />
        <InputOption Icon={SendIcon} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
