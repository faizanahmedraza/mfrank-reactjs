import Error403Component from "Components/403/Error403Component";
import DefaultPermissions from "Constants/Permissions.js";
const checkPermissions = (Component, permission) => {
  let permissions = JSON.parse(localStorage.getItem("permissions")) || "";
  let componentPermissions = permission || [];
  permissions = permissions.concat(DefaultPermissions);
  let permissionFilter = componentPermissions.filter((p) => {
    return permissions.indexOf(p) !== -1;
  });

  if (permissionFilter.length > 0) return Component;
  else return Error403Component;
};
const Permission = {
  checkPermissions,
};
export default Permission;
