import SIZE from "Redux/V1/Variation/ActionType";

const sizeGet = () => {
    return {
        type: SIZE.SIZE_GET
    };
};
const sizeGetSuccess = (data) => {
    return {
        type: SIZE.SIZE_GET_SUCCESS,
        response: data,
    };
};
const sizeGetFailed = (data) => {
    return {
        type: SIZE.SIZE_GET_FAILED,
        response: data,
    };
};

const SizeGetAction = {
    sizeGet,
    sizeGetSuccess,
    sizeGetFailed,
};

export default SizeGetAction;
