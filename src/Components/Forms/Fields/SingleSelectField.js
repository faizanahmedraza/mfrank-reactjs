import React from "react";
import Select from "react-select";
import ErrorBusiness from "Businesses/ErrorBusiness";

class SingleSelectField extends React.Component {
    state = {
        error: null,
    };
    render() {
        let errorSubmit = ErrorBusiness.errorCheck(
            this.props.error,
            this.props.name
        );
        return (
            <React.Fragment>
                <div>
                    <label>{this.props.placeholder}</label>
                    <span
                        className={`form-group1 ${
                            this.state.error || errorSubmit
                                ? "is-invalid error-input"
                                : ""
                        }`}
                    >
                        <Select
                            name={this.props.name}
                            className={
                                this.state.error || errorSubmit
                                    ? "error-select"
                                    : ""
                            }
                            options={this.props.options}
                            placeholder={this.props.placeholder}
                            onChange={this.props.onChange}
                            required={this.props.required}
                            value={this.props.defaultValue}
                            isDisabled={this.props.disabled ? true : false}
                        />
                        {this.state.error || errorSubmit ? (
                            <p className="text-danger validation-message">
                                {this.state.error}
                                {!this.state.error ? errorSubmit : ""}
                            </p>
                        ) : null}
                    </span>
                </div>
            </React.Fragment>
        );
    }
}

export default SingleSelectField;
