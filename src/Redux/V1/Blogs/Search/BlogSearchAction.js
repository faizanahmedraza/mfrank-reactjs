import BLOG from "Redux/V1/Blogs/ActionType";

const blogSearch = (data) => {
    return {
        type: BLOG.BLOG_SEARCH,
        request: data,
    };
};
const blogSearchSuccess = (data) => {
    return {
        type: BLOG.BLOG_SEARCH_SUCCESS,
        response: data,
    };
};
const blogSearchFailed = (data) => {
    return {
        type: BLOG.BLOG_SEARCH_FAILED,
        response: data,
    };
};

const BlogSearchAction = {
    blogSearch,
    blogSearchSuccess,
    blogSearchFailed,
};

export default BlogSearchAction;
