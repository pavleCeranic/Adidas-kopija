import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "../styles/Category.module.css";

const Featured = (props) => {
  const { containerProps, namesProps } = props;

  const [post, setPost] = useState(null);

  if (!post) return null;

  return (
    <div className={style[containerProps]}>
      {post.map}
      <div className={style[namesProps]}>FEATURED</div>
      <ul>
        <li>
          {post.Model} {post.name}
        </li>
      </ul>
    </div>
  );
};

export default Featured;
