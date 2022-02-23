import { all } from "redux-saga/effects";
import { ProductListSaga } from "Redux/V1/Products/Get/ProductGetSaga";
import { ProductDetailSaga } from "Redux/V1/Products/First/ProductFirstSaga";
import { ProductUpdateSaga } from "Redux/V1/Products/Put/ProductPutSaga";
import { ProductCreateSaga } from "Redux/V1/Products/Post/ProductPostSaga";
import { ProductDeleteSaga } from "Redux/V1/Products/Delete/ProductDeleteSaga";

export default function* ProductRootSaga() {
  yield all([
    ProductListSaga(),
    ProductDetailSaga(),
    ProductUpdateSaga(),
    ProductCreateSaga(),
    ProductDeleteSaga()
  ]);
}
