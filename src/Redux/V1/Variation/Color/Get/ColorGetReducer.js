import COLOR from "Redux/V1/Variation/ActionType";

const ColorGetReducer = (
  state = {
    loading: false,
    colors: [],
    pagination: {},
  },
  action
) => {
  switch (action.type) {
    case COLOR.COLOR_GET:
      return {
        ...state,
        loading: true,
        error: null,
        colors: [],
        pagination: {},
      };
    case COLOR.COLOR_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        colors: action.response,
        pagination: action.response.pagination,
      };
    case COLOR.COLOR_GET_FAILED:
      return {
        ...state,
        loading: false,
        error: action.response,
        colors: [],
        pagination: {},
      };
    default:
      return state;
  }
};
export default ColorGetReducer;
