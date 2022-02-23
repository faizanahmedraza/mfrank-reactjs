import CATEGORY from "Redux/V1/Categories/ActionType";

const CategoryListReducer = (
  state = {
    loading: false,
    categories: [],
    // pagination: {},
  },
  action
) => {
  switch (action.type) {
    case CATEGORY.CATEGORY_GET:
      return {
        ...state,
        loading: true,
        error: null,
        categories: [],
        // pagination: {},
      };
    case CATEGORY.CATEGORY_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.response,
        // pagination: action.response.pagination,
      };
    case CATEGORY.CATEGORY_GET_FAILED:
      return {
        ...state,
        loading: false,
        error: action.response,
        categories: [],
        // pagination: {},
      };
    default:
      return state;
  }
};
export default CategoryListReducer;
