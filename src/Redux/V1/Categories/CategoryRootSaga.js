import { all } from "redux-saga/effects";
import { CategoryListSaga } from "Redux/V1/Categories/Get/CategoryGetSaga";

export default function* TagRootSaga() {
  yield all([
    CategoryListSaga()
  ]);
}
