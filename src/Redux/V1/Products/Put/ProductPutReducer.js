import PRODUCT from "Redux/V1/Products/ActionType";

const ProductUpdateReducer = (
    state = {
        loading: false,
        success: false,
        products: {},
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case PRODUCT.PRODUCT_PUT:
            return {
                ...state,
                loading: true,
                err_mess: null,
                products: {},
            };
        case PRODUCT.PRODUCT_PUT_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                products: action.response,
            };
        case PRODUCT.PRODUCT_PUT_FAILED:
            return {
                ...state,
                loading: false,
                err_mess: action.response,
                products: {},
            };
        default:
            return state;
    }
};

export default ProductUpdateReducer;
