import TAG from "Redux/V1/Tags/ActionType";

const tagGet = () => {
  return {
    type: TAG.TAG_GET
  };
};
const tagGetSuccess = (data) => {
  return {
    type: TAG.TAG_GET_SUCCESS,
    response: data,
  };
};
const tagGetFailed = (data) => {
  return {
    type: TAG.TAG_GET_FAILED,
    response: data,
  };
};

const TagListAction = {
  tagGet,
  tagGetSuccess,
  tagGetFailed,
};

export default TagListAction;
