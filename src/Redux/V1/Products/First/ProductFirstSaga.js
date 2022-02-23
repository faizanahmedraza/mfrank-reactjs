import { takeEvery, put } from "redux-saga/effects";
import PRODUCT from "Redux/V1/Products/ActionType";
import ProductFirstAction from "Redux/V1/Products/First/ProductFirstAction";
import ProductService from "Services/V1/ProductService";

function* productFirst(data) {
    try {
        const response = yield ProductService.productFirst(data.request);
        if (response.length !== 0) {
            yield put(ProductFirstAction.productFirstSuccess(response));
        } else {
            yield put(ProductFirstAction.productFirstFailed(response.error.message));
        }
    } catch (error) {
        console.log(error);
    }
}

export function* ProductDetailSaga() {
    yield takeEvery(PRODUCT.PRODUCT_FIRST, productFirst);
}
