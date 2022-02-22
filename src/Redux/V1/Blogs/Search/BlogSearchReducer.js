import BLOG from "Redux/V1/Blogs/ActionType";

const BlogSearchReducer = (
    state = {
        loading: false,
        success: false,
        blogs: [],
    },
    action
) => {
    switch (action.type) {
        case BLOG.BLOG_SEARCH:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case BLOG.BLOG_SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                blogs: action.response,
            };
        case BLOG.BLOG_SEARCH_FAILED:
            return { ...state, loading: false, error: action.response };
        default:
            return state;
    }
};
export default BlogSearchReducer;
