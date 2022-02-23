import V1 from "Constants/V1ApiConstant";
import Gateway from "Gateways/Gateway";

const tagGet = async (data) => {
  const response = await Gateway.guestGateway(
    "GET",
    V1.tag.tags
  );
  return response;
};

const TagService = {
  tagGet
};

export default TagService;
