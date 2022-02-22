import { combineReducers } from "redux";
import BlogListReducer from "Redux/V1/Blogs/Get/BlogGetReducer";
import BlogDetailReducer from "Redux/V1/Blogs/First/BlogFirstReducer";
import BlogUpdateReducer from "Redux/V1/Blogs/Put/BlogPutReducer";
import BlogCreateReducer from "Redux/V1/Blogs/Post/BlogPostReducer";
import BlogDeleteReducer from "Redux/V1/Blogs/Delete/BlogDeleteReducer";
import BlogSearchReducer from "Redux/V1/Blogs/Search/BlogSearchReducer";
import BlogFilterReducer from "Redux/V1/Blogs/Filter/BlogFilterReducer";

const BlogRootReducer = combineReducers({
  list: BlogListReducer,
  detail: BlogDetailReducer,
  update: BlogUpdateReducer,
  create: BlogCreateReducer,
  delete: BlogDeleteReducer,
  search: BlogSearchReducer,
  filter: BlogFilterReducer,
});
export default BlogRootReducer;
