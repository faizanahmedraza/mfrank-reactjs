import { takeEvery, put } from "redux-saga/effects";
import BLOG from "Redux/V1/Blogs/ActionType";
import BlogDeleteAction from "Redux/V1/Blogs/Delete/BlogDeleteAction";
import BlogService from "Services/V1/BlogService";
import ToastHelper from "Helpers/ToastHelper";
import BlogListAction from "Redux/V1/Blogs/Get/BlogGetAction";

function* blogDelete(data) {
    try {
        const response = yield BlogService.blogDelete(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(BlogDeleteAction.blogDeleteSuccess(response.data));
            yield put(BlogListAction.blogGet());
        } else {
            ToastHelper.error(response.error.message);
            yield put(BlogDeleteAction.blogDeleteFailed(response.error));
        }
    } catch (error) {
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(BlogDeleteAction.blogDeleteFailed());
    }
}

export function* BlogDeleteSaga() {
    yield takeEvery(BLOG.BLOG_DELETE, blogDelete);
}
