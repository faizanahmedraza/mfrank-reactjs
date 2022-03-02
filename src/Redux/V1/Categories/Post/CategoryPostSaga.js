import { takeEvery, put } from "redux-saga/effects";
import CATEGORY from "Redux/V1/Categories/ActionType";
import CategoryPostAction from "Redux/V1/Categories/Post/CategoryPostAction";
import CategoryListAction from "Redux/V1/Categories/Get/CategoryGetAction";
import CategoryService from "Services/V1/CategoryService";
import ToastHelper from "Helpers/ToastHelper";

function* categoryPost(data) {
  try {
    const response = yield CategoryService.categoryPost(data.request);
    if (response.success) {
      ToastHelper.success(response.message);
      yield put(CategoryPostAction.categoryPostSuccess(response));
      yield put(CategoryListAction.categoryGet());
    } else {
      ToastHelper.error(response.error.message);
      yield put(CategoryPostAction.categoryPostFailed(response.error));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* CategoryPostSaga() {
  yield takeEvery(CATEGORY.CATEGORY_POST, categoryPost);
}
