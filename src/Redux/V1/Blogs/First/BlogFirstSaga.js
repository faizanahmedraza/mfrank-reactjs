import { takeEvery, put } from "redux-saga/effects";
import BLOG from "Redux/V1/Blogs/ActionType";
import BlogFirstAction from "Redux/V1/Blogs/First/BlogFirstAction";
import BlogService from "Services/V1/BlogService";

function* blogFirst(data) {
    try {
        const response = yield BlogService.blogFirst(data.request);
        if (response.success) {
            yield put(BlogFirstAction.blogFirstSuccess(response.data));
        } else {
            yield put(BlogFirstAction.blogFirstFailed(response.error.message));
        }
    } catch (error) {
        console.log(error);
    }
}

export function* BlogDetailSaga() {
    yield takeEvery(BLOG.BLOG_FIRST, blogFirst);
}
