import { takeEvery, put } from "redux-saga/effects";
import BLOG from "Redux/V1/Blogs/ActionType";
import BlogsAction from "Redux/V1/Blogs/ActionType";
import BlogService from "Services/V1/BlogService";

function* blogFilter(data) {
  try {
    const response = yield BlogService.blogFilter(data.request);
    if (response.success) {
      yield put(BlogsAction.filterBlogsSuccess(response.data));
    } else {
      yield put(BlogsAction.filterBlogsFailed(response.error));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* BlogFilterSaga() {
  yield takeEvery(BLOG.BLOG_FILTER, blogFilter);
}
