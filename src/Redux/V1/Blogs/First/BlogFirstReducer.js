import BLOG from "Redux/V1/Blogs/ActionType";

const BlogDetailReducer = (
    state = {
        loading: false,
        blog: {
            title: null,
            description: null,
            link: null,
            tags: [],
            
            permissions: [],
        },
        err_mess: null,
        fetched: false,
    },
    action
) => {
    switch (action.type) {
        case BLOG.BLOG_FIRST:
            return {
                ...state,
                loading: true,
                fetched: false,
            };
        case BLOG.BLOG_FIRST_SUCCESS:
            return {
                ...state,
                loading: false,
                blog: action.response.post,
                fetched: true,
            };
        case BLOG.BLOG_FIRST_FAILED:
            return {
                ...state,
                loading: false,
                err_mess: action.response,
                fetched: true,
            };
        default:
            return state;
    }
};

export default BlogDetailReducer;
