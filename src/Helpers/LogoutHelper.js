const logout = (status) => {
    localStorage.removeItem("admin_user");
    localStorage.removeItem("admin_access_token");
    window.location.href = "/login";
};

const LogoutHelper = {
    logout,
};

export default LogoutHelper;
