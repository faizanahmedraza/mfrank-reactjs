import BLOG from "Redux/V1/Blogs/ActionType";

const blogPut = (data) => {
    return {
        type: BLOG.BLOG_PUT,
        request: data,
    };
};
const blogPutSuccess = (data) => {
    return {
        type: BLOG.BLOG_PUT_SUCCESS,
        response: data,
    };
};
const blogPutFailed = (data) => {
    return {
        type: BLOG.BLOG_PUT_FAILED,
        response: data,
    };
};

const BlogUpdateAction = {
    blogPut,
    blogPutSuccess,
    blogPutFailed,
};

export default BlogUpdateAction;
