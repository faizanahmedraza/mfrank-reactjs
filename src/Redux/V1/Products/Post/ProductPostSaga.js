import { takeEvery, put } from "redux-saga/effects";
import PRODUCT from "Redux/V1/Products/ActionType";
import ProductCreateAction from "Redux/V1/Products/Post/ProductPostAction";
import ProductService from "Services/V1/ProductService";
import ToastHelper from "Helpers/ToastHelper";

function* productPost(data) {
    try {
        const response = yield ProductService.productPost(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(ProductCreateAction.productPostSuccess(response));
            setTimeout(function () {
                window.location.href = "/";
            }, 1000);
        } else {
            ToastHelper.error(response.error.message);
            yield put(ProductCreateAction.productPostFailed(response.error));
        }
    } catch (error) {
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(ProductCreateAction.productPostFailed());
    }
}

export function* ProductCreateSaga() {
    yield takeEvery(PRODUCT.PRODUCT_POST, productPost);
}
