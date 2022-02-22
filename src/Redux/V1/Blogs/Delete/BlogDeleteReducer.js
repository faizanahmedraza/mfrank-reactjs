import BLOG from "Redux/V1/Blogs/ActionType";

const BlogDeleteReducer = (
    state = {
        loading: false,
        success: false,
        blog_delete: {},
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case BLOG.BLOG_DELETE:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case BLOG.BLOG_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                blog_delete: action.response,
            };
        case BLOG.BLOG_DELETE_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default BlogDeleteReducer;
