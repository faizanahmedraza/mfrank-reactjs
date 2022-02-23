import { takeEvery, put } from "redux-saga/effects";
import PRODUCT from "Redux/V1/Products/ActionType";
import ProductDeleteAction from "Redux/V1/Products/Delete/ProductDeleteAction";
import ProductService from "Services/V1/ProductService";
import ToastHelper from "Helpers/ToastHelper";
import ProductListAction from "Redux/V1/Products/Get/ProductGetAction";

function* productDelete(data) {
    try {
        const response = yield ProductService.productDelete(data.request);
        if (response.length !== 0) {
            ToastHelper.success(response.message);
            yield put(ProductDeleteAction.productDeleteSuccess(response));
            yield put(ProductListAction.productGet());
        } else {
            ToastHelper.error(response.error.message);
            yield put(ProductDeleteAction.productDeleteFailed(response.error));
        }
    } catch (error) {
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(ProductDeleteAction.productDeleteFailed());
    }
}

export function* ProductDeleteSaga() {
    yield takeEvery(PRODUCT.PRODUCT_DELETE, productDelete);
}
