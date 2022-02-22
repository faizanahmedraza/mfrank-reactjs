import Store from "Redux/Store";

const validate = (modulePermission) => {
    const userPermissions = Store.getState().login.permissions;
    const permit = modulePermission.filter((permission) => {
        return userPermissions.indexOf(permission) !== -1;
    });
    return permit.length ? true : false;
};

const PermissionHelper = {
    validate,
};

export default PermissionHelper;
