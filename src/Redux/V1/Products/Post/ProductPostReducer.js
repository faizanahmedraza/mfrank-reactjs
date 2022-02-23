import PRODUCT from "Redux/V1/Products/ActionType";

const ProductCreateReducer = (
    state = {
        loading: false,
        success: false,
        products: [],
    },
    action
) => {
    switch (action.type) {
        case PRODUCT.PRODUCT_POST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case PRODUCT.PRODUCT_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.response,
                success: true,
            };
        case PRODUCT.PRODUCT_POST_FAILED:
            return { ...state, loading: false, error: action.response };
        default:
            return state;
    }
};
export default ProductCreateReducer;
