import React, { Component } from "react";
import LogoutHelper from "Helpers/LogoutHelper";

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
            <div class="dropdown-content2">
              <label onClick={() => LogoutHelper.logout()}>LogOut</label>
            </div>
          </div>
          {/* <div className="navbar-right">
            <button
              className="btn btn-buy"
              onClick={() => LogoutHelper.logout()}
            >
              <i data-feather="log-out"></i> <span>LogOut</span>
            </button>
          </div> */}
          {/* <div id="navbarMenu" class="navbar-menu-wrapper">
						<div class="navbar-menu-header">
							<a href="/" class="df-logo">
								<img
								 src="/assets/img/BionicWP-logo.gif"
									alt="logo"
									className="img-fluid"
								/>
							</a>
							<a id="mainMenuClose" href="/">
								<i data-feather="x"></i>
							</a>
						</div>
						<ul class="nav navbar-menu">
							<li class="nav-label pd-l-20 pd-lg-l-25 d-lg-none">
								Main Navigation
							</li>
							<li class="nav-item with-sub">
								<a href="/" class="nav-link">
									<i data-feather="pie-chart"></i> Dashboard
								</a>
								<ul class="navbar-menu-sub">
									<li class="nav-sub-item">
										<a href="/" class="nav-sub-link">
											<i data-feather="bar-chart-2"></i>
											Sales Monitoring
										</a>
									</li>
									<li class="nav-sub-item">
										<a href="/" class="nav-sub-link">
											<i data-feather="bar-chart-2"></i>
											Website Analytics
										</a>
									</li>
									<li class="nav-sub-item">
										<a href="/" class="nav-sub-link">
											<i data-feather="bar-chart-2"></i>
											Cryptocurrency
										</a>
									</li>
									<li class="nav-sub-item">
										<a href="/" class="nav-sub-link">
											<i data-feather="bar-chart-2"></i>
											Helpdesk Management
										</a>
									</li>
								</ul>
							</li>
							<li class="nav-item with-sub">
								<a href="/" class="nav-link">
									<i data-feather="package"></i> Apps
								</a>
								<ul class="navbar-menu-sub">
									<li class="nav-sub-item">
										<a href="/" class="nav-sub-link">
											<i data-feather="calendar"></i>
											Calendar
										</a>
									</li>
									<li class="nav-sub-item">
										<a href="/" class="nav-sub-link">
											<i data-feather="message-square"></i>
											Chat
										</a>
									</li>
									<li class="nav-sub-item">
										<a href="/" class="nav-sub-link">
											<i data-feather="users"></i>Contacts
										</a>
									</li>
									<li class="nav-sub-item">
										<a href="/" class="nav-sub-link">
											<i data-feather="file-text"></i>File
											Manager
										</a>
									</li>
									<li class="nav-sub-item">
										<a href="/" class="nav-sub-link">
											<i data-feather="mail"></i>Mail
										</a>
									</li>
								</ul>
							</li>
							<li class="nav-item with-sub">
								<a href="/" class="nav-link">
									<i data-feather="layers"></i> Pages
								</a>
								<div class="navbar-menu-sub">
									<div class="d-lg-flex">
										<ul>
											<li class="nav-label">
												Authentication
											</li>
											<li class="nav-sub-item">
												<a
													href="/"
													class="nav-sub-link"
												>
													<i data-feather="log-in"></i>{" "}
													Sign In
												</a>
											</li>
											<li class="nav-sub-item">
												<a
													href="/"
													class="nav-sub-link"
												>
													<i data-feather="user-plus"></i>{" "}
													Sign Up
												</a>
											</li>
											<li class="nav-sub-item">
												<a
													href="/"
													class="nav-sub-link"
												>
													<i data-feather="user-check"></i>{" "}
													Verify Account
												</a>
											</li>
											<li class="nav-sub-item">
												<a
													href="/"
													class="nav-sub-link"
												>
													<i data-feather="shield-off"></i>{" "}
													Forgot Password
												</a>
											</li>
											<li class="nav-label mg-t-20">
												User Pages
											</li>
											<li class="nav-sub-item">
												<a
													href="/"
													class="nav-sub-link"
												>
													<i data-feather="user"></i>{" "}
													View Profile
												</a>
											</li>
											<li class="nav-sub-item">
												<a
													href="/"
													class="nav-sub-link"
												>
													<i data-feather="users"></i>{" "}
													Connections
												</a>
											</li>
											<li class="nav-sub-item">
												<a
													href="/"
													class="nav-sub-link"
												>
													<i data-feather="users"></i>{" "}
													Groups
												</a>
											</li>
											<li class="nav-sub-item">
												<a
													href="/"
													class="nav-sub-link"
												>
													<i data-feather="calendar"></i>{" "}
													Events
												</a>
											</li>
										</ul>
										<ul>
											<li class="nav-label">
												Error Pages
											</li>
											<li class="nav-sub-item">
												<a
													href="../template/classic/page-404.html"
													class="nav-sub-link"
												>
													<i data-feather="file"></i>{" "}
													404 Page Not Found
												</a>
											</li>
											<li class="nav-sub-item">
												<a
													href="../template/classic/page-500.html"
													class="nav-sub-link"
												>
													<i data-feather="file"></i>{" "}
													500 Internal Server
												</a>
											</li>
											<li class="nav-sub-item">
												<a
													href="../template/classic/page-503.html"
													class="nav-sub-link"
												>
													<i data-feather="file"></i>{" "}
													503 Service Unavailable
												</a>
											</li>
											<li class="nav-sub-item">
												<a
													href="../template/classic/page-505.html"
													class="nav-sub-link"
												>
													<i data-feather="file"></i>{" "}
													505 Forbidden
												</a>
											</li>
											<li class="nav-label mg-t-20">
												Other Pages
											</li>
											<li class="nav-sub-item">
												<a
													href="../template/classic/page-timeline.html"
													class="nav-sub-link"
												>
													<i data-feather="file-text"></i>{" "}
													Timeline
												</a>
											</li>
											<li class="nav-sub-item">
												<a
													href="../template/classic/page-pricing.html"
													class="nav-sub-link"
												>
													<i data-feather="file-text"></i>{" "}
													Pricing
												</a>
											</li>
											<li class="nav-sub-item">
												<a
													href="../template/classic/page-help-center.html"
													class="nav-sub-link"
												>
													<i data-feather="file-text"></i>{" "}
													Help Center
												</a>
											</li>
											<li class="nav-sub-item">
												<a
													href="../template/classic/page-invoice.html"
													class="nav-sub-link"
												>
													<i data-feather="file-text"></i>{" "}
													Invoice
												</a>
											</li>
										</ul>
									</div>
								</div>
							</li>
							<li class="nav-item active">
								<a href="index.html" class="nav-link">
									<i data-feather="box"></i> Components
								</a>
							</li>
							<li class="nav-item">
								<a href="../collections/" class="nav-link">
									<i data-feather="archive"></i> Collections
								</a>
							</li>
						</ul>
					</div>
					<div class="navbar-right"></div> */}
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
