import BLOG from "Redux/V1/Blogs/ActionType";

const BlogFilterAction = {
  filterBlogs,
  filterBlogsSuccess,
  filterBlogsFailed,
};

function filterBlogs(data) {
  return {
    type: BLOG.BLOG_FILTER,
    request: data,
  };
}
function filterBlogsSuccess(data) {
  return {
    type: BLOG.BLOG_FILTER_SUCCESS,
    response: data,
  };
}
function filterBlogsFailed(data) {
  return {
    type: BLOG.BLOG_FILTER_FAILED,
    response: data,
  };
}

export default BlogFilterAction;
