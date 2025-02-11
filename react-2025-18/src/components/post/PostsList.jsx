import { useEffect, useState } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import { useLoaderData } from "react-router";

function PostList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post, index) => (
            <Post key={index} author={post.author} body={post.body} id={post.id} />
          ))}
        </ul>
      )}

      {posts.length === 0 && (
        <div className={`text-center text-white`}>
          <h2 className={`text-2xl font-semibold mb-2`}>
            There are no posts yet.
          </h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostList;
