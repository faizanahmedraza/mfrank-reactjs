import BLOG from "Redux/V1/Blogs/ActionType";

const blogPost = (data) => {
    return {
        type: BLOG.BLOG_POST,
        request: data,
    };
};
const blogPostSuccess = (data) => {
    return {
        type: BLOG.BLOG_POST_SUCCESS,
        response: data,
    };
};
const blogPostFailed = (data) => {
    return {
        type: BLOG.BLOG_POST_SUCCESS,
        response: data,
    };
};

const BlogCreateAction = {
    blogPost,
    blogPostSuccess,
    blogPostFailed,
};

export default BlogCreateAction;
