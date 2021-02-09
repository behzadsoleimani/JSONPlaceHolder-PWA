import React, { useEffect } from "react";
import { AppItems } from "../Context/state";
import ClipLoader from "react-spinners/ClipLoader";
import Post from "./post";

const Posts = ({ match }: any) => {
  const { posts, getPosts }: any = AppItems();
  const { params } = match;
  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    await getPosts(params.id);
  };

  return (
    <div className="card-container">
      {posts && posts.length ? (
        posts.map((itm: any, index: number) => (
          <Post title={itm.title} key={index} id={itm.id} />
        ))
      ) : (
        <ClipLoader loading={true} size={150} />
      )}
    </div>
  );
};

export default Posts;
