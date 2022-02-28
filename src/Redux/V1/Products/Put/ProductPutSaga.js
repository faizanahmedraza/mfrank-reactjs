import { takeEvery, put } from "redux-saga/effects";
import PRODUCT from "Redux/V1/Products/ActionType";
import ProductUpdateAction from "Redux/V1/Products/Put/ProductPutAction";
import ProductService from "Services/V1/ProductService";
import ToastHelper from "Helpers/ToastHelper";

function* productPut(data) {
    try {
        const response = yield ProductService.productPut(
            data.request.form,
            data.request.id
        );
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(ProductUpdateAction.productPutSuccess(response));
            // setTimeout(function () {
            //     window.location.href = "/";
            // }, 1000);
        } else {
            ToastHelper.error(response.error.message);
            yield put(ProductUpdateAction.productPutFailed(response.error));
        }
    } catch (error) {
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(ProductUpdateAction.productPutFailed());
    }
}

export function* ProductUpdateSaga() {
    yield takeEvery(PRODUCT.PRODUCT_PUT, productPut);
}
