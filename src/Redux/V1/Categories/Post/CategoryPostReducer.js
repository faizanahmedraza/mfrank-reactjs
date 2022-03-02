import CATEGORY from "Redux/V1/Categories/ActionType";

const CategoryPostReducer = (
  state = {
    loading: false,
    categories: [],
    // pagination: {},
  },
  action
) => {
  switch (action.type) {
    case CATEGORY.CATEGORY_POST:
      return {
        ...state,
        loading: true,
        error: null,
        categories: [],
        // pagination: {},
      };
    case CATEGORY.CATEGORY_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.response,
        // pagination: action.response.pagination,
      };
    case CATEGORY.CATEGORY_POST_FAILED:
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
export default CategoryPostReducer;
