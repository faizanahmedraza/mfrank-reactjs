import PRODUCT from "Redux/V1/Products/ActionType";

const productPost = (data) => {
    return {
        type: PRODUCT.PRODUCT_POST,
        request: data,
    };
};
const productPostSuccess = (data) => {
    return {
        type: PRODUCT.PRODUCT_POST_SUCCESS,
        response: data,
    };
};
const productPostFailed = (data) => {
    return {
        type: PRODUCT.PRODUCT_POST_SUCCESS,
        response: data,
    };
};

const ProductCreateAction = {
    productPost,
    productPostSuccess,
    productPostFailed,
};

export default ProductCreateAction;
