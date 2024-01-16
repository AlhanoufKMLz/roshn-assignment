import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../redux/store";
import { fetchSinglePost } from "../redux/slices/posts";

export default function SinglePost() {
  let { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { post, loading, error } = useSelector(
    (state: RootState) => state.posts
  );

  useEffect(() => {
    id && dispatch(fetchSinglePost(id));
  }, []);

  if (loading) {
    return (
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    );
  }
  if (error !== null) {
    return <h1>ERROR: {error}!</h1>;
  }

  return (
    <div className="post">
      <div className="head">
        <Link className="info" to="/">
          BACK
        </Link>
        <div className="head-right">
          <div className="info">USER ID: {post?.userId}</div>
          <div className="info">POST ID: {post?.id}</div>
        </div>
      </div>

      <div className="title">{post?.title}</div>
      <div className="body">{post?.body}</div>
    </div>
  );
}
