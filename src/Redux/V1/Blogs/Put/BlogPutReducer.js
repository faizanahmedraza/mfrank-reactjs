import BLOG from "Redux/V1/Blogs/ActionType";

const BlogUpdateReducer = (
    state = {
        loading: false,
        success: false,
        blogs: {},
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case BLOG.BLOG_PUT:
            return {
                ...state,
                loading: true,
                err_mess: null,
                blogs: {},
            };
        case BLOG.BLOG_PUT_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                blogs: action.response.blogs,
            };
        case BLOG.BLOG_PUT_FAILED:
            return {
                ...state,
                loading: false,
                err_mess: action.response,
                blogs: {},
            };
        default:
            return state;
    }
};

export default BlogUpdateReducer;
