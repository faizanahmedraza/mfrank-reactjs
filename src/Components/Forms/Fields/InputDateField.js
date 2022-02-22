import React, { Component } from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import TimeStampHelper from "Helpers/TimeStampHelper";

class InputDateField extends Component {
    handleCallback = (start, end) => {
        const startDate = TimeStampHelper.formatDate(start._d);
        const endDate = TimeStampHelper.formatDate(end._d);
        localStorage.setItem("startDate", startDate);
        localStorage.setItem("endDate", endDate);
    };
    onCancel = () => {
        localStorage.removeItem("startDate");
        localStorage.removeItem("endDate");
        this.setState({
            eventStartDate: undefined,
            eventEndDate: undefined,
        });
    };

    render() {
        let startDate, endDate, defaultDate;
        if ("startDate" in localStorage) {
            startDate = localStorage.getItem("startDate");
            endDate = localStorage.getItem("endDate");
            defaultDate =
                localStorage.getItem("startDate") +
                " - " +
                localStorage.getItem("endDate");
        } else {
            startDate = undefined;
            endDate = undefined;
            defaultDate = "";
        }

        return (
            <React.Fragment>
                <DateRangePicker
                    initialSettings={{
                        startDate: startDate,
                        endDate: endDate,
                        locale: {
                            format: "YYYY-MM-DD",
                            cancelLabel: "Clear",
                            //separator: "&date_to=",
                        },
                    }}
                    onCallback={this.handleCallback}
                    onCancel={this.onCancel}
                >
                    <input
                        type="text"
                        name={this.props.name}
                        className="form-control"
                        placeholder={this.props.placeholder}
                        value={defaultDate}
                        autoComplete="off"
                    ></input>
                </DateRangePicker>
            </React.Fragment>
        );
    }
}

export default InputDateField;
