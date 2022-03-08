import React, { Component } from "react";

class Header extends Component {
  render() {
    const data = localStorage.getItem("admin_user");
	let name = ""
	if (data)
	{
		const data_obj = JSON.parse(data);
		name = data_obj.first_name;
	}
	else{
		name = ""
	}

    return (
      <React.Fragment>
        <header className="navbar navbar-header navbar-header-fixed">
          <a href="/" id="sidebarMenuOpen" className="burger-menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </a>
          <div className="navbar-brand">
            <a href="/" className="logo">
              SAASFA
            </a>
          </div>

          <div class="dropdown2 navbar-right">
            <a href="/profile">{name}</a>
            <button class="dropbtn">
              <i class="fa fa-caret-down"></i>
            </button>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
