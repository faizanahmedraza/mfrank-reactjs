import BLOG from "Redux/V1/Blogs/ActionType";

const BlogListReducer = (
  state = {
    loading: false,
    blogs: [],
    pagination: {},
  },
  action
) => {
  switch (action.type) {
    case BLOG.BLOG_GET:
      return {
        ...state,
        loading: true,
        error: null,
        blogs: [],
        pagination: {},
      };
    case BLOG.BLOG_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        blogs: action.response.posts,
        pagination: action.response.pagination,
      };
    case BLOG.BLOG_GET_FAILED:
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
export default BlogListReducer;
