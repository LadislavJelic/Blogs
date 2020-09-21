const axios = require("axios");

export const FETCH_CATEGORY = "FETCH_CATEGORY";
export const LOADER_ON = "LOADER_ON";
export const LOADER_OFF = "LOADER_OFF";

export const fetchCategory = (data) => {
  return {
    type: FETCH_CATEGORY,
    payload: data,
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
  const url =
    "https://frontend-api-test-nultien.azurewebsites.net/api/Category";
  return (dispatch) => {
    dispatch(loaderOn());
    axios
      .get(url)
      .then((response) => {
        dispatch(loaderOff());
        dispatch(fetchCategory(response.data.resultData));
      })
      .catch((error) => {
        dispatch(loaderOff());
        //just console.log errors if exist.
        console.log(error);
      });
  };
};
