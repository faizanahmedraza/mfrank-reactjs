import BLOG from "Redux/V1/Blogs/ActionType";

const BlogCreateReducer = (
    state = {
        loading: false,
        success: false,
        blogs: [],
    },
    action
) => {
    switch (action.type) {
        case BLOG.BLOG_POST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case BLOG.BLOG_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                blogs: action.response.blogs,
                success: true,
            };
        case BLOG.BLOG_POST_FAILED:
            return { ...state, loading: false, error: action.response };
        default:
            return state;
    }
};
export default BlogCreateReducer;
