import { takeEvery, put } from "redux-saga/effects";
import CATEGORY from "Redux/V1/Categories/ActionType";
import CategoryListAction from "Redux/V1/Categories/Get/CategoryGetAction";
import CategoryService from "Services/V1/CategoryService";

function* CategoryGet(data) {
  try {
    const response = yield CategoryService.categoryGet();
    if (response.length !== 0) {
      yield put(CategoryListAction.categoryGetSuccess(response));
    } else {
      yield put(CategoryListAction.categoryGetFailed(response.error));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* CategoryListSaga() {
  yield takeEvery(CATEGORY.CATEGORY_GET, CategoryGet);
}
