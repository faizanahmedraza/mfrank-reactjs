import React from "react";
import * as Yup from "yup";
import ErrorBusiness from "Businesses/ErrorBusiness";

class InputPasswordField extends React.Component {
    state = {
        error: null,
    };

    validateField = (e) => {
        if (this.props.schema) {
            Yup.reach(this.props.schema, this.props.name)
                .validate(e.target.value)
                .then(this.setState({ error: null }))
                .catch((err) => {
                    this.setState({ error: err.errors[0] });
                });
        }
        this.props.onChange(e);
    };

    render() {
        let errorSubmit = ErrorBusiness.errorCheck(
            this.props.error,
            this.props.name
        );
        return (
            <React.Fragment>
                <div
                    className={`form-group ${
                        this.state.error || errorSubmit
                            ? "is-invalid error-input"
                            : ""
                    }`}
                >
                    <label>{this.props.placeholder}</label>
                    <input
                        name={this.props.name}
                        type={this.props.type}
                        id={this.props.name}
                        className="form-control"
                        placeholder={this.props.placeholder}
                        onChange={this.validateField}
                        required={this.props.required}
                        disabled={this.props.disabled ? true : false}
                        value={this.props.value}
                    />
                    {this.state.error || errorSubmit ? (
                        <p className="text-danger validation-message">
                            {this.state.error}
                            {!this.state.error ? errorSubmit : ""}
                        </p>
                    ) : null}
                </div>
            </React.Fragment>
        );
    }
}

export default InputPasswordField;
