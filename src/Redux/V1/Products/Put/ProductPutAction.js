import PRODUCT from "Redux/V1/Products/ActionType";

const productPut = (data) => {
    console.log(data);
    return {
        type: PRODUCT.PRODUCT_PUT,
        request: data,
    };
};
const productPutSuccess = (data) => {
    return {
        type: PRODUCT.PRODUCT_PUT_SUCCESS,
        response: data,
    };
};
const productPutFailed = (data) => {
    return {
        type: PRODUCT.PRODUCT_PUT_FAILED,
        response: data,
    };
};

const ProductUpdateAction = {
    productPut,
    productPutSuccess,
    productPutFailed,
};

export default ProductUpdateAction;
