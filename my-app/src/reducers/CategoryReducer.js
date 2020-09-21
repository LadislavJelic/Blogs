import {
  FETCH_CATEGORY,
  LOADER_ON,
  LOADER_OFF,
} from "../actions/categoryActions";
const initialState = {
  loading: false,
  categories: [],
  error: "",
};

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY:
      return {
        ...state,
        categories: action.payload,
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

export default CategoryReducer;
