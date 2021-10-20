import axios from "axios";
import React, { useEffect } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/users";

const Novo = () => {
  const [post, setPost] = React.useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost((post) => response.data);
    });
  }, []);

  //const listNames = post.map((el) => el);
  console.log("deda", post);

  const lolo = post.forEach((element) => {
    console.log("edamer", element);
  });

  if (!post) return null;

  return (
    <div>
      <h1>{}</h1>
      <p>d</p>
    </div>
  );
};
export default Novo;
