import CATEGORY from "Redux/V1/Categories/ActionType";

const categoryGet = () => {
  return {
    type: CATEGORY.CATEGORY_GET
    };
};
const categoryGetSuccess = (data) => {
  return {
    type: CATEGORY.CATEGORY_GET_SUCCESS,
    response: data,
  };
};
const categoryGetFailed = (data) => {
  return {
    type: CATEGORY.CATEGORY_GET_FAILED,
    response: data,
  };
};

const CategoryListAction = {
  categoryGet,
  categoryGetSuccess,
  categoryGetFailed,
};

export default CategoryListAction;
