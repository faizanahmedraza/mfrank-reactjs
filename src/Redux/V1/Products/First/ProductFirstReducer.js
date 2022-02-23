import PRODUCT from "Redux/V1/Products/ActionType";

const ProductDetailReducer = (
    state = {
        loading: false,
        product: {
            title: null,
            categories: [],
            tags: [],
            price: null,
            description: null,
            images: [],
        },
        variations: [],
        err_mess: null,
        fetched: false,
    },
    action
) => {
    switch (action.type) {
        case PRODUCT.PRODUCT_FIRST:
            return {
                ...state,
                loading: true,
                fetched: false,
            };
        case PRODUCT.PRODUCT_FIRST_SUCCESS:
            return {
                ...state,
                loading: false,
                product: action.response,
                fetched: true,
            };
        case PRODUCT.PRODUCT_FIRST_FAILED:
            return {
                ...state,
                loading: false,
                err_mess: action.response,
                fetched: true,
            };
        default:
            return state;
    }
};

export default ProductDetailReducer;
