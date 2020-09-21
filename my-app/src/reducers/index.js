import { combineReducers } from "redux";
import BlogReducer from "./BlogReducer";
import CategoryReducer from "./CategoryReducer";

const reducers = combineReducers({
  blog: BlogReducer,
  category: CategoryReducer,
});

export default reducers;
