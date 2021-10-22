import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "../styles/Category.module.css";

const Featured = (props) => {
  const { containerProps, namesProps } = props;

  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get("https://adidas-a9f81-default-rtdb.firebaseio.com/.json")
      .then((response) => {
        setPost(response.data);
        console.log("ima li ovdje ista", response.data);
      });
  }, []);

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
