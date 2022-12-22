import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts, postDelete } from "./postSlice";
import PostAuthor from "./PostAuthor";
import React from "react";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const act = (e) => {
    e.preventDefault();
  };
  return (
    <section>
      <h2>Posts</h2>
      {posts.map((post) => (
        <article key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content.substring(0, 100)}</p>
          <p className="postCredit">
            <PostAuthor userId={post.userId} />
          </p>
          <button onClick={() => dispatch(postDelete(post.id))}>Delete</button>
        </article>
      ))}
    </section>
  );
};

export default PostList;
