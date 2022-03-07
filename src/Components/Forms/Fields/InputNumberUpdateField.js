import React from "react";
import * as Yup from "yup";
import ErrorBusiness from "Businesses/ErrorBusiness";

class InputNumberUpdateField extends React.Component {
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
                        type={this.props.type}
                        id={this.props.name}
                        name={this.props.name}
                        placeholder={this.props.placeholder}
                        onInput={this.validateField}
                        className="form-control comment-field"
                        required={this.props.required}
                        defaultValue={this.props.defaultValue}
                        pattern={this.props.pattern}
                        step={this.props.step}
                        autocomplete="off"
                        disabled={this.props.disabled === true ? true : false}
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

export default InputNumberUpdateField;
