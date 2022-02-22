import { takeEvery, put } from "redux-saga/effects";
import BLOG from "Redux/V1/Blogs/ActionType";
import BlogListAction from "Redux/V1/Blogs/Get/BlogGetAction";
import BlogService from "Services/V1/BlogService";

function* blogGet(data) {
    try {
        const response = yield BlogService.blogGet(
            data.request.params,
            data.request.type
            );
        if (response.success) {
            yield put(BlogListAction.blogGetSuccess(response.data));
        } else {
            yield put(BlogListAction.blogGetFailed(response.error));
        }
    } catch (error) {
        console.log(error);
    }
}

export function* BlogListSaga() {
    yield takeEvery(BLOG.BLOG_GET, blogGet);
}
