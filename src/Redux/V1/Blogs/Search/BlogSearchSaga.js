import { takeEvery } from "redux-saga/effects";
import BLOG from "Redux/V1/Blogs/ActionType";

function* blogSearch(data) {
    // try {
    //     const response = yield BlogService.blogSearch(data.request);
    //     if (response.success) {
    //         yield put(BlogSearchAction.blogSearchSuccess(response.data));
    //     } else {
    //         yield put(BlogSearchAction.blogSearchFailed(response.error));
    //     }
    // } catch (error) {
    //     console.log(error);
    // }
}

export function* BlogSearchSaga() {
    yield takeEvery(BLOG.BLOG_SEARCH, blogSearch);
}
