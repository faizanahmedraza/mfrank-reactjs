import V1 from "Constants/V1ApiConstant";
import Gateway from "Gateways/Gateway";

const sizeGet = async () => {
  const response = await Gateway.guestGateway(
    "GET",
    V1.size
  );
  return response;
};
const colorGet = async () => {
  const response = await Gateway.guestGateway(
    "GET",
    V1.color
  );
  return response;
};

const VariationService = {
  colorGet,
  sizeGet
};

export default VariationService;
