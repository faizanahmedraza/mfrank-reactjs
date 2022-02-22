import React, { Component } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCamera } from "@fortawesome/fontawesome-free-solid";
import * as Yup from "yup";
import { Row, Col } from "react-bootstrap";
import ErrorBusiness from "Businesses/ErrorBusiness";
class UploadPhotoField extends Component {
    state = {
        error: null,
    };
    validateField = (e) => {
        const value = {
            fileName: e.target.files[0].name,
            type: e.target.files[0].type,
            size: e.target.files[0].size,
        };
        if (this.props.schema) {
            Yup.reach(this.props.schema, this.props.name)
                .validate(value)
                .then(this.setState({ error: null }))
                .catch((err) => {
                    this.setState({ error: err.errors[0] });
                });
        }
    };
    render() {
        let errorSubmit = ErrorBusiness.errorCheck(
            this.props.error,
            this.props.name
        );
        return (
            <React.Fragment>
                <Row>
                    <Col lg={12} md={12}>
                        <div
                            id="profile-upload"
                            className={`box-header ${
                                this.props.error_clear
                                    ? null
                                    : this.state.error || errorSubmit
                                    ? "is-invalid error-input"
                                    : ""
                            }`}
                            style={{
                                backgroundImage: `url(
                                            ${this.props.backgroundPicture}
                                        )`,
                            }}
                        >
                            <div class="hvr-profile-img">
                                <input
                                    type="file"
                                    name={this.props.name}
                                    id="getval"
                                    class="upload w180"
                                    title="Dimensions 180 X 180"
                                    onChange={(e) => this.props.onChange(e)}
                                    accept=".jpg, .jpeg, .png, .gif"
                                    onInput={this.validateField}
                                />
                            </div>
                            {/* <i data-feather="camera"></i> */}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={12}>
                        {this.props.error_clear ? null : this.state.error ||
                          errorSubmit ? (
                            <p
                                // className="text-danger validation-message float-left domain-error"
                                className={` text-danger validation-message float-left domain-error white-label-img-validation  ${
                                    this.state.error
                                        ? "profile-img-validation-message"
                                        : " "
                                }`}
                            >
                                {this.state.error}{" "}
                                {!this.state.error ? errorSubmit : ""}
                            </p>
                        ) : null}
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default UploadPhotoField;
