import { takeEvery, put } from "redux-saga/effects";
import PRODUCT from "Redux/V1/Products/ActionType";
import ProductListAction from "Redux/V1/Products/Get/ProductGetAction";
import ProductService from "Services/V1/ProductService";

function* ProductGet() {
    try {
        const response = yield ProductService.productGet();
        if (response.length !== 0) {
            yield put(ProductListAction.productGetSuccess(response));
        } else {
            yield put(ProductListAction.productGetFailed(response.error));
        }
    } catch (error) {
        console.log(error);
    }
}

export function* ProductListSaga() {
    yield takeEvery(PRODUCT.PRODUCT_GET, ProductGet);
}
