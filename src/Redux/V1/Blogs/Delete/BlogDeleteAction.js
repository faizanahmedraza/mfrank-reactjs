import BLOG from "Redux/V1/Blogs/ActionType";

const blogDelete = (data) => {
    return {
        type: BLOG.BLOG_DELETE,
        request: data,
    };
};
const blogDeleteSuccess = (data) => {
    return {
        type: BLOG.BLOG_DELETE_SUCCESS,
        response: data,
    };
};
const blogDeleteFailed = (data) => {
    return {
        type: BLOG.BLOG_DELETE_FAILED,
        response: data,
    };
};

const BlogDeleteAction = {
    blogDelete,
    blogDeleteSuccess,
    blogDeleteFailed,
};

export default BlogDeleteAction;
