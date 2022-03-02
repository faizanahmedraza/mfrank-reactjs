import { all } from "redux-saga/effects";
import { CategoryListSaga } from "Redux/V1/Categories/Get/CategoryGetSaga";
import { CategoryPostSaga } from "Redux/V1/Categories/Post/CategoryPostSaga";

export default function* CategoryRootSaga() {
  yield all([
    CategoryListSaga(),
    CategoryPostSaga()
  ]);
}
