import { takeEvery, put } from "redux-saga/effects";
import PRODUCT from "Redux/V1/Products/ActionType";
import ProductStatusAction from "Redux/V1/Products/Status/ProductStatusAction";
import ProductService from "Services/V1/ProductService";
import ToastHelper from "Helpers/ToastHelper";
import ProductListAction from "Redux/V1/Products/Get/ProductGetAction";

function* productStatus(data) {
    try {
        ToastHelper.info();
        const response = yield ProductService.productStatus(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(
                ProductStatusAction.productStatusSuccess(response.data)
            );
            yield put(ProductListAction.productGet());
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                ProductStatusAction.productStatusFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        ProductStatusAction.productStatusFailed();
    }
}

export function* ProductStatusSaga() {
    yield takeEvery(PRODUCT.PRODUCT_STATUS, productStatus);
}
