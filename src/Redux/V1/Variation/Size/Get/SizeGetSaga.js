import { takeEvery, put } from "redux-saga/effects";
import SIZE from "Redux/V1/Variation/ActionType";
import SizeListAction from "Redux/V1/Variation/Size/Get/SizeGetAction";
import VariationService from "Services/V1/VariationService";

function* SizeGet() {
    try {
        const response = yield VariationService.sizeGet();
        if (response.length !== 0) {
            yield put(SizeListAction.sizeGetSuccess(response));
        } else {
            yield put(SizeListAction.sizeGetFailed(response.error));
        }
    } catch (error) {
        console.log(error);
    }
}

export function* SizeListSaga() {
    yield takeEvery(SIZE.SIZE_GET, SizeGet);
}
