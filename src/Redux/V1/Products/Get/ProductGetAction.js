import PRODUCT from "Redux/V1/Products/ActionType";

const productGet = () => {
    return {
        type: PRODUCT.PRODUCT_GET
    };
};
const productGetSuccess = (data) => {
    return {
        type: PRODUCT.PRODUCT_GET_SUCCESS,
        response: data,
    };
};
const productGetFailed = (data) => {
    return {
        type: PRODUCT.PRODUCT_GET_FAILED,
        response: data,
    };
};

const ProductListAction = {
    productGet,
    productGetSuccess,
    productGetFailed,
};

export default ProductListAction;
