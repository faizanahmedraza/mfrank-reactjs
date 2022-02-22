import { all } from "redux-saga/effects";
import { BlogListSaga } from "Redux/V1/Blogs/Get/BlogGetSaga";
import { BlogDetailSaga } from "Redux/V1/Blogs/First/BlogFirstSaga";
import { BlogUpdateSaga } from "Redux/V1/Blogs/Put/BlogPutSaga";
import { BlogCreateSaga } from "Redux/V1/Blogs/Post/BlogPostSaga";
import { BlogDeleteSaga } from "Redux/V1/Blogs/Delete/BlogDeleteSaga";
import { BlogSearchSaga } from "Redux/V1/Blogs/Search/BlogSearchSaga";
import { BlogFilterSaga } from "Redux/V1/Blogs/Filter/BlogFilterSaga";

export default function* BlogRootSaga() {
  yield all([
    BlogListSaga(),
    BlogDetailSaga(),
    BlogUpdateSaga(),
    BlogCreateSaga(),
    BlogDeleteSaga(),
    BlogSearchSaga(),
    BlogFilterSaga(),
  ]);
}
