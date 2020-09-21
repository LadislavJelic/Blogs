import React, { useState } from "react";
import Categories from "./components/Categories";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ApplicationMessage from "./components/ApplicationMessage";
import "./App.scss";

function App() {
  let [visibleModal, setVisibleModal] = useState(false);
  return (
    <div className="App">
      <Header />
      <div className="wrapper-container-title-application-meesage-add-post">
        <div className="title">Title</div>
        <ApplicationMessage />
        <div
          onClick={() => setVisibleModal(!visibleModal)}
          className="add-post"
        >
          Add post
        </div>
      </div>
      {visibleModal && (
        <Modal mode="createBlog" onClick={() => setVisibleModal(false)} />
      )}
      <div className="wrapper-categories-blogs">
        <Categories />
        <Blogs />
      </div>
    </div>
  );
}

export default App;
