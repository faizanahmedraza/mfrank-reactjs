import BLOG from "Redux/V1/Blogs/ActionType";

const BlogFilterReducer = (
  state = {
    loading: false,
    success: false,
    blogs: [],
    pagination: {},
  },
  action
) => {
  switch (action.type) {
    case BLOG.BLOG_FILTER:
      return {
        ...state,
        loading: true,
        error: null,
        blogs: [],
        pagination: {},
      };
    case BLOG.BLOG_FILTER_SUCCESS:
      return {
        ...state,
        loading: false,
        blogs: action.response.blogs,
        pagination: action.response.pagination,
      };
    case BLOG.BLOG_FILTER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.response,
        blogs: [],
        pagination: {},
      };
    default:
      return state;
  }
};
export default BlogFilterReducer;
