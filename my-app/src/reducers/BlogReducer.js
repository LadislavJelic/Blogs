import { FETCH_DATA, LOADER_ON, LOADER_OFF } from "../actions/blogActions";

const initialState = {
  loading: false,
  blogs: [],
  error: "",
};

const BlogReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        blogs: action.payload,
      };
    case LOADER_ON:
      return {
        ...state,
        loading: true,
      };
    case LOADER_OFF:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default BlogReducer;
