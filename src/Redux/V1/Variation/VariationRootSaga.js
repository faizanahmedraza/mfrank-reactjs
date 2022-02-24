import { all } from "redux-saga/effects";
import { ColorListSaga } from "Redux/V1/Variation/Color/Get/ColorGetSaga";
import { SizeListSaga } from "Redux/V1/Variation/Size/Get/SizeGetSaga";

export default function* ProductRootSaga() {
  yield all([
    ColorListSaga(),
    SizeListSaga()
  ]);
}
