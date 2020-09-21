const axios = require("axios");

export const FETCH_DATA = "FETCH_DATA";
export const LOADER_ON = "LOADER_ON";
export const LOADER_OFF = "LOADER_OFF";

const fetchBlogs = (blogs) => {
  return {
    type: FETCH_DATA,
    payload: blogs,
  };
};

const loaderOn = () => {
  return {
    type: LOADER_ON,
  };
};

const loaderOff = () => {
  return {
    type: LOADER_OFF,
  };
};

export const fetchData = () => {
  const url = `https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts`;
  return (dispatch) => {
    dispatch(loaderOn());
    axios
      .get(url)
      .then((response) => {
        dispatch(loaderOff());
        dispatch(fetchBlogs(response.data.resultData));
      })
      .catch((error) => {
        //just console.log errors if exist.
        dispatch(loaderOff());
        console.log(error);
      });
  };
};

// I don't know how to match categories with blog on creation. On popup we don't have input for category
export const createBlog = (blog) => {
  const url = `https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts`;
  return (dispatch) => {
    dispatch(loaderOn());
    axios
      .post(url, blog)
      .then((response) => {
        dispatch(loaderOff());
        dispatch(fetchData());
      })
      .catch((error) => {
        //just console.log errors if exist.
        dispatch(loaderOff());
        console.log(error);
      });
  };
};

// I don't know how to match categories with blog on creation. On popup we don't have input for category
export const editBlog = (blog, id) => {
  const url = `https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts/${id}`;
  return (dispatch) => {
    dispatch(loaderOn());
    axios
      .put(url, blog)
      .then((response) => {
        dispatch(loaderOff());
        dispatch(fetchData());
      })
      .catch((error) => {
        //just console.log errors if exist.
        dispatch(loaderOff());
        console.log(error);
      });
  };
};

export const deleteBlog = (id) => {
  const url = `https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts/${id}`;
  return (dispatch) => {
    dispatch(loaderOn());
    axios
      .delete(url)
      .then((response) => {
        dispatch(loaderOff());
        dispatch(fetchData());
      })
      .catch((error) => {
        //just console.log errors if exist.
        dispatch(loaderOff());
        console.log(error);
      });
  };
};
