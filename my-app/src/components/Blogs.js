import React, { useEffect } from "react";
import Blog from "./Blog";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../actions/blogActions";
import Loader from "./Loader";

function Blogs() {
  const blog = useSelector((state) => state.blog.blogs);
  const loading = useSelector((state) => state.blog.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="Blogs">
      {blog.map((blog, ind, arr) => (
        <Blog key={blog.id} value={blog} />
      ))}
    </div>
  );
}

export default Blogs;
