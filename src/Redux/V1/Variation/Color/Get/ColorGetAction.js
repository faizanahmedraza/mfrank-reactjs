import COLOR from "Redux/V1/Variation/ActionType";

const colorGet = () => {
    return {
        type: COLOR.COLOR_GET
    };
};
const colorGetSuccess = (data) => {
    return {
        type: COLOR.COLOR_GET_SUCCESS,
        response: data,
    };
};
const colorGetFailed = (data) => {
    return {
        type: COLOR.COLOR_GET_FAILED,
        response: data,
    };
};

const ColorGetAction = {
    colorGet,
    colorGetSuccess,
    colorGetFailed,
};

export default ColorGetAction;
