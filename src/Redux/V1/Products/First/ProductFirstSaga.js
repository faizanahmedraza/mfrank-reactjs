import { takeEvery, put } from "redux-saga/effects";
import PRODUCT from "Redux/V1/Products/ActionType";
import ProductFirstAction from "Redux/V1/Products/First/ProductFirstAction";
import ProductService from "Services/V1/ProductService";

function* productFirst(data) {
    try {
        const response = yield ProductService.productFirst(data.request);
        if (response.success) {
            yield put(ProductFirstAction.productFirstSuccess(response.data));
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
