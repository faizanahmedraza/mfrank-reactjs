import CATEGORY from "Redux/V1/Categories/ActionType";

const categoryPost = (data) => {
  return {
    type: CATEGORY.CATEGORY_POST,
    request: data,
  };
};
const categoryPostSuccess = (data) => {
  return {
    type: CATEGORY.CATEGORY_POST_SUCCESS,
    response: data,
  };
};
const categoryPostFailed = (data) => {
  return {
    type: CATEGORY.CATEGORY_POST_FAILED,
    response: data,
  };
};

const CategoryPostAction = {
  categoryPost,
  categoryPostSuccess,
  categoryPostFailed,
};

export default CategoryPostAction;
