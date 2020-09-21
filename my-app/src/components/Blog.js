import React, { useState } from "react";
import { deleteBlog } from "../actions/blogActions";
import Modal from "./Modal";
import { useDispatch } from "react-redux";

function Blog(props) {
  const dispatch = useDispatch();
  const { categoryId, createdAt, id, text, title } = props.value;
  const datum = new Date(createdAt);
  const date = datum.getDate();
  const month = datum.getMonth() + 1;
  const year = datum.getFullYear();
  const hour = datum.getHours();
  const minutes = datum.getMinutes();
  let [visibleModal, setVisibleModal] = useState(false);

  return (
    <div className="Blog">
      <header className="header">
        <div className="image-published">
          <div className="placeholder-80x80">
            <div className="dimension">80 x 80</div>
          </div>
          <div className="title-posted-date">
            <div className="title">{title}</div>
            <div className="posted-date">
              posted date: {date}.{month}.{year} at {hour}:{minutes} by Some
              person
            </div>
          </div>
        </div>
        <div className="buttons">
          <div
            className="button"
            onClick={() => setVisibleModal(!visibleModal)}
          >
            Edit
          </div>
          {visibleModal && (
            <Modal
              textProps={text}
              titleProps={title}
              categoryId={categoryId}
              mode="editBlog"
              id={id}
              onClick={() => setVisibleModal(false)}
            />
          )}
          <div className="button" onClick={() => dispatch(deleteBlog(id))}>
            Delete
          </div>
        </div>
      </header>
      <section className="section">
        <div className="description">{text}</div>
        <div className="wrapper-3-placeholders">
          <div className="placeholder-100x100">
            <div className="dimension">100 x 100</div>
          </div>
          <div className="placeholder-100x100">
            <div className="dimension">100 x 100</div>
          </div>
          <div className="placeholder-100x100">
            <div className="dimension">100 x 100</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
