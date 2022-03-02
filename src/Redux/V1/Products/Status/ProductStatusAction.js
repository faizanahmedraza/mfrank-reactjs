import PRODUCT from "Redux/V1/Products/ActionType";

const productStatus = (data) => {
    return {
        type: PRODUCT.PRODUCT_STATUS,
        request: data,
    };
};
const productStatusSuccess = (data) => {
    return {
        type: PRODUCT.PRODUCT_STATUS_SUCCESS,
        response: data,
    };
};
const productStatusFailed = (data) => {
    return {
        type: PRODUCT.PRODUCT_STATUS_FAILED,
        response: data,
    };
};
const ProductStatusActionV3 = {
    productStatus,
    productStatusSuccess,
    productStatusFailed,
};

export default ProductStatusActionV3;
