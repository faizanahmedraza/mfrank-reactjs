import TAG from "Redux/V1/Tags/ActionType";

const TagListReducer = (
  state = {
    loading: false,
    tags: [],
    pagination: {},
  },
  action
) => {
  switch (action.type) {
    case TAG.TAG_GET:
      return {
        ...state,
        loading: true,
        error: null,
        tags: [],
        pagination: {},
      };
    case TAG.TAG_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        tags: action.response,
        // pagination: action.response.pagination,
      };
    case TAG.TAG_GET_FAILED:
      return {
        ...state,
        loading: false,
        error: action.response,
        tags: [],
        pagination: {},
      };
    default:
      return state;
  }
};
export default TagListReducer;
