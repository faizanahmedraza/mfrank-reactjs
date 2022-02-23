import PRODUCT from "Redux/V1/Products/ActionType";

const ProductDeleteReducer = (
    state = {
        loading: false,
        success: false,
        product_delete: {},
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case PRODUCT.PRODUCT_DELETE:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case PRODUCT.PRODUCT_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                product_delete: action.response,
            };
        case PRODUCT.PRODUCT_DELETE_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default ProductDeleteReducer;
