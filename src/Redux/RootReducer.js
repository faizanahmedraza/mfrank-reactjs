import { combineReducers } from "redux";

import BlogRootReducer from "Redux/V1/Blogs/BlogRootReducer";
export default combineReducers({
    blogs: BlogRootReducer,
});
