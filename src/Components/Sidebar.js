import PermissionHelper from "Helpers/PermissionHelper";
import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          id="sidebarMenu"
          className="sidebar sidebar-fixed sidebar-components"
        >
          <div className="sidebar-header">
            {/* <a href="/" id="mainMenuOpen">
							<i data-feather="menu"></i>
						</a> */}
            <h5>Components</h5>
            <a href="/" id="sidebarMenuClose">
              <i data-feather="x"></i>
            </a>
          </div>
          <div className="sidebar-body">
            <ul className="sidebar-nav side-bar-main">
              {PermissionHelper.validate(["access_all", "dashboard_all"]) ? (
                <li className="nav-item">
                  <a
                    href="/dashboard"
                    className={
                      this.props.active === "dashboard"
                        ? "active nav-link"
                        : "nav-link"
                    }
                  >
                    <i data-feather="layout"></i> Dashboard
                  </a>
                </li>
              ) : null}
              {PermissionHelper.validate([
                "access_all",
                "users_all",
                "users_create",
                "users_read",
              ]) ? (
                <li
                  className={
                    this.props.active === "users-add" ||
                    this.props.active === "users"
                      ? "nav-item show"
                      : "nav-item"
                  }
                >
                  <a
                    href="/"
                    className={
                      this.props.active === "users-add" ||
                      this.props.active === "users"
                        ? "active nav-link with-sub"
                        : "nav-link with-sub"
                    }
                  >
                    <i data-feather="users"></i> Users
                  </a>

                  <nav className="nav">
                    {PermissionHelper.validate([
                      "access_all",
                      "users_all",
                      "users_read",
                      "users_update",
                      "users_delete",
                    ]) ? (
                      <a
                        href="/users"
                        className={
                          this.props.active === "users" ? "active" : ""
                        }
                      >
                        All Users
                      </a>
                    ) : null}
                    {PermissionHelper.validate([
                      "access_all",
                      "users_all",
                      "users_create",
                    ]) ? (
                      <a
                        href="/users/add"
                        className={
                          this.props.active === "users-add" ? "active" : ""
                        }
                      >
                        Add User
                      </a>
                    ) : null}
                  </nav>
                </li>
              ) : null}
              {PermissionHelper.validate([
                "access_all",
                "roles_all",
                "roles_create",
                "roles_read",
              ]) ? (
                <li
                  className={
                    this.props.active === "roles" ||
                    this.props.active === "roles-add"
                      ? "nav-item show"
                      : "nav-item"
                  }
                >
                  <a
                    href="/"
                    className={
                      this.props.active === "roles" ||
                      this.props.active === "roles-add"
                        ? "active nav-link with-sub"
                        : "nav-link with-sub"
                    }
                  >
                    <i data-feather="globe"></i>
                    Roles
                  </a>
                  <nav className="nav">
                    {PermissionHelper.validate([
                      "access_all",
                      "roles_all",
                      "roles_read",
                      "roles_update",
                      "roles_delete",
                    ]) ? (
                      <a
                        href="/roles"
                        className={
                          this.props.active === "roles" ? "active" : ""
                        }
                      >
                        {" "}
                        All Roles
                      </a>
                    ) : null}
                    {PermissionHelper.validate([
                      "access_all",
                      "roles_all",
                      "roles_create",
                    ]) ? (
                      <a
                        href="/roles/add"
                        className={
                          this.props.active === "roles-add" ? "active" : ""
                        }
                      >
                        Add Role
                      </a>
                    ) : null}
                  </nav>
                </li>
              ) : null}
              {PermissionHelper.validate([
                "access_all",
                "groups_all",
                "groups_read",
                "groups_create",
              ]) ? (
                <li
                  className={
                    this.props.active === "customers" ||
                    this.props.active === "customers-add"
                      ? "nav-item show"
                      : "nav-item"
                  }
                >
                  <a
                    href="/"
                    className={
                      this.props.active === "customers" ||
                      this.props.active === "customers-add"
                        ? "active nav-link with-sub"
                        : "nav-link with-sub"
                    }
                  >
                    <i data-feather="users"></i>
                    Customers
                  </a>
                  <nav className="nav">
                    <a
                      href="/customers"
                      className={
                        this.props.active === "customers" ? "active" : ""
                      }
                    >
                      All Customers
                    </a>

                    <a
                      href="/customers/add"
                      className={
                        this.props.active === "customers-add" ? "active" : ""
                      }
                    >
                      Add Customer
                    </a>
                  </nav>
                </li>
              ) : null}
              {PermissionHelper.validate([
                "access_all",
                "users_all",
                "users_create",
                "users_read",
              ]) ? (
                <li
                  className={
                    this.props.active === "tags-add" ||
                    this.props.active === "tags"
                      ? "nav-item show"
                      : "nav-item"
                  }
                >
                  <a
                    href="/"
                    className={
                      this.props.active === "tags-add" ||
                      this.props.active === "tags"
                        ? "active nav-link with-sub"
                        : "nav-link with-sub"
                    }
                  >
                    <i data-feather="users"></i> Tags
                  </a>

                  <nav className="nav">
                    {PermissionHelper.validate([
                      "access_all",
                      "users_all",
                      "users_read",
                      "users_update",
                      "users_delete",
                    ]) ? (
                      <a
                        href="/tags"
                        className={
                          this.props.active === "tags" ? "active" : ""
                        }
                      >
                        All Tags
                      </a>
                    ) : null}
                    {PermissionHelper.validate([
                      "access_all",
                      "users_all",
                      "users_create",
                    ]) ? (
                      <a
                        href="/tags/add"
                        className={
                          this.props.active === "tags-add" ? "active" : ""
                        }
                      >
                        Add Tag
                      </a>
                    ) : null}
                  </nav>
                </li>
              ) : null}
              {PermissionHelper.validate([
                "access_all",
                "users_all",
                "users_create",
                "users_read",
              ]) ? (
                <li
                  className={
                    this.props.active === "blogs-add" ||
                    this.props.active === "blogs"
                      ? "nav-item show"
                      : "nav-item"
                  }
                >
                  <a
                    href="/"
                    className={
                      this.props.active === "blogs-add" ||
                      this.props.active === "blogs"
                        ? "active nav-link with-sub"
                        : "nav-link with-sub"
                    }
                  >
                    <i data-feather="users"></i> Blogs
                  </a>

                  <nav className="nav">
                    {PermissionHelper.validate([
                      "access_all",
                      "users_all",
                      "users_read",
                      "users_update",
                      "users_delete",
                    ]) ? (
                      <a
                        href="/blogs"
                        className={
                          this.props.active === "blogs" ? "active" : ""
                        }
                      >
                        All Blogs
                      </a>
                    ) : null}
                    {PermissionHelper.validate([
                      "access_all",
                      "users_all",
                      "users_create",
                    ]) ? (
                      <a
                        href="/blogs/add"
                        className={
                          this.props.active === "blogs-add" ? "active" : ""
                        }
                      >
                        Add Blog
                      </a>
                    ) : null}
                  </nav>
                </li>
              ) : null}
              {/* PremiumPlugins Option  */}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Sidebar;
