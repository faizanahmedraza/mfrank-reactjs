import { takeEvery, put } from "redux-saga/effects";
import COLOR from "Redux/V1/Variation/ActionType";
import ColorListAction from "Redux/V1/Variation/Color/Get/ColorGetAction";
import VariationService from "Services/V1/VariationService";

function* ColorGet() {
    try {
        const response = yield VariationService.colorGet();
        if (response.length !== 0) {
            yield put(ColorListAction.colorGetSuccess(response));
        } else {
            yield put(ColorListAction.colorGetFailed(response.error));
        }
    } catch (error) {
        console.log(error);
    }
}

export function* ColorListSaga() {
    yield takeEvery(COLOR.COLOR_GET, ColorGet);
}
