import { all } from "redux-saga/effects";
import TagRootSaga from "Redux/V1/Tags/TagRootSaga";
import CategoryRootSaga from "Redux/V1/Categories/CategoryRootSaga";
import ProductRootSaga from "Redux/V1/Products/ProductRootSaga";

export default function* rootSaga() {
    yield all([
        TagRootSaga(),
        CategoryRootSaga(),
        ProductRootSaga(),
    ]);
}
