import { takeEvery, put } from "redux-saga/effects";
import TAG from "Redux/V1/Tags/ActionType";
import TagListAction from "Redux/V1/Tags/Get/TagGetAction";
import TagService from "Services/V1/TagService";

function* tagGet(data) {
  try {
    const response = yield TagService.tagGet();
    if (response.length !== 0) {
      yield put(TagListAction.tagGetSuccess(response));
    } else {
      yield put(TagListAction.tagGetFailed(response.error));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* TagListSaga() {
  yield takeEvery(TAG.TAG_GET, tagGet);
}
