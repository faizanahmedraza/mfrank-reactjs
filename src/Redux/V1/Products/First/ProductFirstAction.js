import PRODUCT from "Redux/V1/Products/ActionType";

const productFirst = (data) => {
    return {
        type: PRODUCT.PRODUCT_FIRST,
        request: data,
    };
};
const productFirstSuccess = (data) => {
    return {
        type: PRODUCT.PRODUCT_FIRST_SUCCESS,
        response: data,
    };
};
const productFirstFailed = (data) => {
    return {
        type: PRODUCT.PRODUCT_FIRST_FAILED,
        response: data,
    };
};

const ProductDetailAction = {
    productFirst,
    productFirstSuccess,
    productFirstFailed,
};

export default ProductDetailAction;
