import PRODUCT from "Redux/V1/Products/ActionType";

const ProductStatusReducer = (
    state = {
        loading: false,
        product: {},
        fetched: false,
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case PRODUCT.PRODUCT_STATUS:
            return {
                ...state,
                loading: true,
                product: {},
                err_mess: null,
                fetched: false,
            };
        case PRODUCT.PRODUCT_STATUS_SUCCESS:
            return {
                ...state,
                loading: false,
                product: action.response.products,
                fetched: true,
                err_mess: null,
            };
        case PRODUCT.PRODUCT_STATUS_FAILED:
            return {
                ...state,
                loading: false,
                err_mess: action.response,
                product: {},
                fetched: false,
            };
        default:
            return state;
    }
};

export default ProductStatusReducer;
