import { takeEvery, put } from "redux-saga/effects";
import BLOG from "Redux/V1/Blogs/ActionType";
import BlogCreateAction from "Redux/V1/Blogs/Post/BlogPostAction";
import BlogService from "Services/V1/BlogService";
import ToastHelper from "Helpers/ToastHelper";

function* blogPost(data) {
    try {
        const response = yield BlogService.blogPost(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(BlogCreateAction.blogPostSuccess(response.data));
            setTimeout(function () {
                window.location.href = "/blogs";
            }, 1000);
        } else {
            ToastHelper.error(response.error.message);
            yield put(BlogCreateAction.blogPostFailed(response.error));
        }
    } catch (error) {
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(BlogCreateAction.blogPostFailed());
    }
}

export function* BlogCreateSaga() {
    yield takeEvery(BLOG.BLOG_POST, blogPost);
}
