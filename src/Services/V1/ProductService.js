import V1 from "Constants/V1ApiConstant";
import Gateway from "Gateways/Gateway";

const productGet = async () => {
  const response = await Gateway.guestGateway(
    "GET",
    V1.product.products
  );
  return response;
}

const productFirst = async (data) => {
  const response = await Gateway.guestGateway(
    "GET",
    V1.product.products + "/" + data
  );
  return response;
};

const productPost = async (data) => {
  const response = await Gateway.guestGateway(
    "POST",
    V1.product.products,
    productBodyData(data)
  );
  return response;
};

const productBodyData = (data) => {
  console.log(data,"test")
  let _data = {};
  _data.title = data.title;
  _data.description = data.description;
  _data.price = data.price;
  _data.tags = data.tags.map((tag) => {
    return tag.label;
  });
  _data.categories = data.categories.map((category) => {
    return category.label;
  });
  _data.images = data.images;
  _data.status = data.status.value;
  _data.variations = data.variations.map(item => {
    return {
      color: item.color.label,
      size: item.size.label,
      images: item.images
    }
  });
  return JSON.stringify(_data);
};

const productDelete = async (data) => {
  const response = await Gateway.guestGateway(
    "DELETE",
    V1.product.products + "/" + data
  );
  return response;
};

const productPut = async (data, id) => {
  const response = await Gateway.guestGateway(
    "PUT",
    `${V1.product.products}/${id}`,
    productBodyData(data)
  );
  return response;
};

const ProductService = {
  productGet,
  productFirst,
  productPut,
  productPost,
  productDelete,
};

export default ProductService;
