import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createBlog, editBlog } from "../actions/blogActions";

function Modal(props) {
  const { mode, onClick, titleProps, textProps, id, categoryId } = props;
  const initialValueTitle = () => {
    if (mode === "createBlog") {
      return "";
    } else if (mode === "editBlog") {
      return titleProps;
    }
  };
  const initialValueText = () => {
    if (mode === "createBlog") {
      return "";
    } else if (mode === "editBlog") {
      return textProps;
    }
  };
  let [title, setTitle] = useState(initialValueTitle());
  let [text, setText] = useState(initialValueText());
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    setTitle("");
    setText("");
    if (mode === "createBlog") {
      dispatch(
        createBlog({
          title,
          text,
          categoryId: 0,
        })
      );
    } else if (mode === "editBlog") {
      dispatch(
        editBlog(
          {
            id,
            title,
            text,
            categoryId,
          },
          id
        )
      );
    }
    onClick();
  };

  return (
    <div className="Modal">
      <header className="header">
        <div className="title">
          {mode === "createBlog" && "Add"}
          {mode === "editBlog" && "Edit"} blog post
        </div>
        <div className="button-right">
          <div className="hide"></div>
          <div className="max">
            <div className="square"></div>
          </div>
          <div className="close" onClick={onClick}></div>
        </div>
      </header>
      <section className="section">
        <form onSubmit={onSubmit}>
          <div className="wrapper-label-input input">
            <label>Title</label>
            <input
              type="text"
              placeholder="Title of the post"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <span className="red-star">★</span>
          </div>
          <div className="wrapper-label-input">
            <label>Text</label>
            <textarea
              placeholder="Text of the post"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            ></textarea>
            <span className="red-star">★</span>
          </div>
          <div className="buttons buttons-modal">
            <button type="submit" className="button">
              Post
            </button>
            <div className="button" onClick={onClick}>
              Cancel
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Modal;
