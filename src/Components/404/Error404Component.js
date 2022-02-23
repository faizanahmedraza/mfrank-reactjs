import React, { Component } from "react";
// import Sidebar from "Components/Sidebar";
// import TemplateMain from "Templates/TemplateMain";

class Error404Component extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <TemplateMain> */}
          {/* <Sidebar active="404" /> */}

          <div className="content content-components page-404">
            <div className="container">
              <div className="ht-100p d-flex flex-column align-items-center justify-content-center">
                {/* <div className="wd-70p wd-sm-250 wd-lg-300 mg-b-15">
                                    <img
                                        src="/assets/img/BionicWP-logo.gif"
                                        alt="logo"
                                        className="img-fluid"
                                    />
                                </div> */}
                <h1 className="tx-color-01 tx-24 tx-sm-32 tx-lg-36 mg-xl-b-5">
                  404 Page Not Found
                </h1>
                <h5 className="tx-16 tx-sm-18 tx-lg-20 tx-normal mg-b-20">
                  Oopps. The page you were looking for doesn't exist.
                </h5>
              </div>
            </div>
          </div>
        {/* </TemplateMain> */}
      </React.Fragment>
    );
  }
}

export default Error404Component;
