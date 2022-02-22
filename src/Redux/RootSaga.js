import { all } from "redux-saga/effects";

import BlogRootSaga from "Redux/V1/Blogs/BlogRootSaga";

export default function* rootSaga() {
    yield all([BlogRootSaga()]);
}
