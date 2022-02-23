import V1 from "Constants/V1ApiConstant";
import Gateway from "Gateways/Gateway";

const categoryGet = async () => {
  const response = await Gateway.guestGateway(
    "GET",
    V1.category.categories
  );
  return response;
};

const CategoryService = {
  categoryGet
};

export default CategoryService;
