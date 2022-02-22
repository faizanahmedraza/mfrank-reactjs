import { takeEvery, put } from "redux-saga/effects";
import BLOG from "Redux/V1/Blogs/ActionType";
import BlogUpdateAction from "Redux/V1/Blogs/Put/BlogPutAction";
import BlogService from "Services/V1/BlogService";
import ToastHelper from "Helpers/ToastHelper";

function* blogPut(data) {
    try {
        const response = yield BlogService.blogPut(
            data.request.form,
            data.request.id
        );
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(BlogUpdateAction.blogPutSuccess(response.data));
        } else {
            ToastHelper.error(response.error.message);
            yield put(BlogUpdateAction.blogPutFailed(response.error));
        }
    } catch (error) {
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(BlogUpdateAction.blogPutFailed());
    }
}

export function* BlogUpdateSaga() {
    yield takeEvery(BLOG.BLOG_PUT, blogPut);
}
