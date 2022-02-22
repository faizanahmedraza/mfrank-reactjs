import React from "react";
import * as Yup from "yup";
import ErrorBusiness from "Businesses/ErrorBusiness";
class SelectField extends React.Component {
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
                <div className="form-group">
                    {this.props.title ? (
                        <div className="d-block mb-2"> {this.props.title}</div>
                    ) : (
                        ""
                    )}
                    <select
                        name={this.props.name}
                        id={this.props.id ? this.props.id : this.props.name}
                        className={`form-control cursor-pointer  ${
                            this.state.error || errorSubmit
                                ? "is-invalid error-input"
                                : ""
                        }`}
                        onChange={this.props.onChange}
                        value={this.props.value}
                        onInput={this.validateField}
                        disabled={this.props.disabled ? true : false}
                        required={this.props.required ? true : false}
                    >
                        {this.props.defaultOption ? (
                            <option label={this.props.defaultOption}></option>
                        ) : (
                            ""
                        )}
                        {this.props.options}
                    </select>
                </div>
                {this.state.error || errorSubmit ? (
                    <p className="text-danger validation-message text-right domain-error">
                        {this.state.error}
                        {!this.state.error ? errorSubmit : ""}
                    </p>
                ) : null}
            </React.Fragment>
        );
    }
}

export default SelectField;
