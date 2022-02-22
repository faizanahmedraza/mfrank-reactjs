import BLOG from "Redux/V1/Blogs/ActionType";

const blogGet = (data) => {
    return {
        type: BLOG.BLOG_GET,
        request: data,
    };
};
const blogGetSuccess = (data) => {
    return {
        type: BLOG.BLOG_GET_SUCCESS,
        response: data,
    };
};
const blogGetFailed = (data) => {
    return {
        type: BLOG.BLOG_GET_FAILED,
        response: data,
    };
};

const BlogListAction = {
    blogGet,
    blogGetSuccess,
    blogGetFailed,
};

export default BlogListAction;
