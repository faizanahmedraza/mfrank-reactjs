import PRODUCT from "Redux/V1/Products/ActionType";

const ProductListReducer = (
  state = {
    loading: false,
    products: {
      data: []
    },
    pagination: {},
  },
  action
) => {
  switch (action.type) {
    case PRODUCT.PRODUCT_GET:
      return {
        ...state,
        loading: true,
        error: null,
        products: {
          data: []
        },
        pagination: {},
      };
    case PRODUCT.PRODUCT_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.response,
        pagination: action.response.pagination,
      };
    case PRODUCT.PRODUCT_GET_FAILED:
      return {
        ...state,
        loading: false,
        error: action.response,
        products: [],
        pagination: {},
      };
    default:
      return state;
  }
};
export default ProductListReducer;
