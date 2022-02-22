import BLOG from "Redux/V1/Blogs/ActionType";

const blogFirst = (data) => {
    return {
        type: BLOG.BLOG_FIRST,
        request: data,
    };
};
const blogFirstSuccess = (data) => {
    return {
        type: BLOG.BLOG_FIRST_SUCCESS,
        response: data,
    };
};
const blogFirstFailed = (data) => {
    return {
        type: BLOG.BLOG_FIRST_FAILED,
        response: data,
    };
};

const BlogDetailAction = {
    blogFirst,
    blogFirstSuccess,
    blogFirstFailed,
};

export default BlogDetailAction;
