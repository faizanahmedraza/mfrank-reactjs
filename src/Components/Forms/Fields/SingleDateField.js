import React, { Component } from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import ErrorBusiness from "Businesses/ErrorBusiness";

class SingleDateField extends Component {
    state = {
        error: null,
    };
    onCancel = (event, picker) => {
        picker.element.val("");
        this.props.clearDate();
    };

    render() {
        let errorSubmit = ErrorBusiness.errorCheck(
            this.props.error,
            this.props.name
        );
        return (
            <React.Fragment>
                <label>{this.props.label}</label>
                <span
                    className={`form-group1 ${
                        this.state.error || errorSubmit
                            ? "is-invalid error-input"
                            : ""
                    }`}
                >
                    <DateRangePicker
                        initialSettings={{
                            singleDatePicker: true,

                            locale: {
                                format: "YYYY-MM-DD",
                                cancelLabel: "Clear",
                            },
                        }}
                        // onCallback={this.onCallback}
                        onCancel={this.onCancel}
                        onEvent={this.props.onChange}
                    >
                        <input
                            type="text"
                            name={this.props.name}
                            className="form-control"
                            placeholder={this.props.placeholder}
                            value={this.props.defaultValue}
                            autocomplete="off"
                            disabled={this.props.disabled ? true : false}
                            required={this.props.required ? true : false}
                        ></input>
                    </DateRangePicker>
                    {this.state.error || errorSubmit ? (
                        <p className="text-danger validation-message">
                            {this.state.error}
                            {!this.state.error ? errorSubmit : ""}
                        </p>
                    ) : null}
                </span>
            </React.Fragment>
        );
    }
}

export default SingleDateField;
