import SIZE from "Redux/V1/Variation/ActionType";

const SizeGetReducer = (
  state = {
    loading: false,
    sizes: [],
    pagination: {},
  },
  action
) => {
  switch (action.type) {
    case SIZE.SIZE_GET:
      return {
        ...state,
        loading: true,
        error: null,
        sizes: [],
        pagination: {},
      };
    case SIZE.SIZE_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        sizes: action.response,
        pagination: action.response.pagination,
      };
    case SIZE.SIZE_GET_FAILED:
      return {
        ...state,
        loading: false,
        error: action.response,
        sizes: [],
        pagination: {},
      };
    default:
      return state;
  }
};
export default SizeGetReducer;
