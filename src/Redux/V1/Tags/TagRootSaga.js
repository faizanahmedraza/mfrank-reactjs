import { all } from "redux-saga/effects";
import { TagListSaga } from "Redux/V1/Tags/Get/TagGetSaga";

export default function* TagRootSaga() {
  yield all([
    TagListSaga()
  ]);
}
