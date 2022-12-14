import PRODUCT from "Redux/V1/Products/ActionType";

const ProductDetailReducer = (
    state = {
        loading: false,
        product: {
            title: null,
            product_categories: [],
            product_tags: [],
            price: null,
            description: null,
            product_images: [],
            product_variation: [],
            product_metas: []
        },
        variations: [
            {
                size: "",
                color: "",
                images: []
            }
        ],
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
