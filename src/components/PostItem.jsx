import React from "react";
import { AiFillDelete } from "react-icons/ai";

export const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post-content">
        <strong>
          {props.number}, {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post-btns">
        <button className="btn">
          <AiFillDelete className="delete-btn" />
        </button>
      </div>
    </div>
  );
};

export default PostItem;
