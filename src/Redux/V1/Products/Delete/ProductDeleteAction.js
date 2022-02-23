import PRODUCT from "Redux/V1/Products/ActionType";

const productDelete = (data) => {
    return {
        type: PRODUCT.PRODUCT_DELETE,
        request: data,
    };
};
const productDeleteSuccess = (data) => {
    return {
        type: PRODUCT.PRODUCT_DELETE_SUCCESS,
        response: data,
    };
};
const productDeleteFailed = (data) => {
    return {
        type: PRODUCT.PRODUCT_DELETE_FAILED,
        response: data,
    };
};

const ProductDeleteAction = {
    productDelete,
    productDeleteSuccess,
    productDeleteFailed,
};

export default ProductDeleteAction;
