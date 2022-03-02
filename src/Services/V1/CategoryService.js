import V1 from "Constants/V1ApiConstant";
import Gateway from "Gateways/Gateway";

const categoryGet = async () => {
  const response = await Gateway.guestGateway(
    "GET",
    V1.category.categories
  );
  return response;
};

const categoryPostBody = (data) => {
  let _data = {}
  console.log(data)
  _data.name = data.name;
  _data.parent_category = data.parent_category.label
  return JSON.stringify(_data);
}

const categoryPost = async (data) => {
  const _data = categoryPostBody(data)
  const response = await Gateway.guestGateway(
    "POST",
    V1.category.categories,
    _data
  );
  return response;
};

const CategoryService = {
  categoryGet,
  categoryPost
};

export default CategoryService;
