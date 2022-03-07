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
        } else {
            ToastHelper.error(response.errors[0]);
            yield put(ProductUpdateAction.productPutFailed(response.errors));
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
