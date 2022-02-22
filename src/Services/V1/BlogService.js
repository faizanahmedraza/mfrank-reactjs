import V1 from "Constants/V1ApiConstant";
import Gateway from "Gateways/Gateway";

const blogGet = async (data, type) => {
  if (type === "admin")
  {
  const response = await Gateway.authGateway(
    "GET",
    V1.blog.blogs + "?" + queryBody(data)
  );
  return response;
  }
  else
  {
    const response = await Gateway.guestGateway(
      "GET",
      V1.guest + "?" + queryBody(data)
    );
    return response;  
  }
};

const queryBody = (data) => {
  let query = data;
  return query;
};

const blogFirst = async (data) => {
  const response = await Gateway.authGateway(
    "GET",
    V1.blog.blogs + "/" + data
  );
  return response;
};

const blogPost = async (data) => {
  const response = await Gateway.authGateway(
    "POST",
    V1.blog.blogs,
    blogBodyData(data)
  );
  return response;
};

const blogBodyData = (data) => {
  let _data = {};
  _data.title = data.title;
  _data.description = data.description;
  _data.link = data.link;
  _data.tags = data.tags.map((tag) => {
    return tag.label;
  });

  // _data.permissions = data.permissions;
  _data.image = data.image;
  _data.status = data.status.value;

  return JSON.stringify(_data);
};

const blogDelete = async (data) => {
  const response = await Gateway.authGateway(
    "DELETE",
    V1.blog.blogs + "/" + data
  );
  return response;
};

const blogPut = async (data, id) => {
  const response = await Gateway.authGateway(
    "PUT",
    `${V1.blog.blogs}/${id}`,
    blogBodyData(data)
  );
  return response;
};

const blogSearch = async (data) => {
  const response = await Gateway.authGateway(
    "GET",
    `${V1.blog.blogs}/search${smartSearchBody(data)}`
  );
  return response;
};

const smartSearchBody = (data) => {
  let query = "?";

  query += `field=${data.field}&`;
  query += `value=${data.value}`;

  return query;
};

const blogStatus = async (identity) => {
  const response = await Gateway.authGateway(
    "PUT",
    V1.blog.blog_status + identity
  );
  return response;
};

const blogPassword = async (data) => {
  const _data = blogPassBody(data);
  const response = await Gateway.authGateway(
    "PUT",
    V1.blog.blog_pass + data.id,
    _data
  );
  return response;
};

const blogPassBody = (data) => {
  let _data = {};
  _data.password = data.password;
  return JSON.stringify(_data);
};
const CustomerService = {
  blogGet,
  blogFirst,
  blogPut,
  blogPost,
  blogDelete,
  blogStatus,
  blogSearch,
  blogPassword,
};

export default CustomerService;
