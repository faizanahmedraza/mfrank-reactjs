import React, { Component } from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import TimeStampHelper from "Helpers/TimeStampHelper";
import moment from "moment";

class DateRangeField extends Component {
    // handleCallback = (start, end) => {
    //     const startDate = TimeStampHelper.formatDate(start._d);
    //     const endDate = TimeStampHelper.formatDate(end._d);
    //     localStorage.setItem("startDate", startDate);
    //     localStorage.setItem("endDate", endDate);
    // };
    onCancel = () => {
        localStorage.removeItem("startDate");
        localStorage.removeItem("endDate");
        this.setState({
            eventStartDate: undefined,
            eventEndDate: undefined,
        });
    };
    handleEvent(event, picker) {
        const startDate = TimeStampHelper.formatDate(picker.startDate._d);
        const endDate = TimeStampHelper.formatDate(picker.endDate._d);
        localStorage.setItem("startDate", startDate);
        localStorage.setItem("endDate", endDate);
    }

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
                        ranges: {
                            Today: [moment(), moment()],
                            "This Week": [
                                moment().subtract(6, "days"),
                                moment(),
                            ],
                            "This Month": [
                                moment().startOf("month"),
                                moment().endOf("month"),
                            ],
                        },
                        alwaysShowCalendars: true,
                        startDate: startDate,
                        endDate: endDate,
                        locale: {
                            format: "YYYY-MM-DD",
                            cancelLabel: "Clear",
                            //separator: "&date_to=",
                        },
                    }}
                    // onCallback={this.handleCallback}
                    onCancel={this.onCancel}
                    onEvent={this.handleEvent}
                >
                    <input
                        type="text"
                        name={this.props.name}
                        className="form-control"
                        placeholder={this.props.placeholder}
                        value={defaultDate}
                        autocomplete="off"
                    ></input>
                </DateRangePicker>
            </React.Fragment>
        );
    }
}

export default DateRangeField;
