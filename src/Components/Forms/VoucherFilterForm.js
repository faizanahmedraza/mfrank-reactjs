import React, { Component } from "react";
import { Row, Button, Col } from "react-bootstrap";
import AsyncSelectField from "Components/Forms/Fields/AsyncSelectField";
import VoucherGetAction from "Redux/V1/Vouchers/Get/VoucherGetAction";
import queryString from "query-string";
import InputSelectField from "Components/Forms/Fields/InputSelectField";
import InputDateField from "Components/Forms/Fields/InputDateField";
import SingleDateField from "Components/Forms/Fields/SingleDateField";
import TimeStampHelper from "Helpers/TimeStampHelper";

class VoucherFilterForm extends Component {
    state = {
        field: null,
    };
    componentDidMount() {
        const query = queryString.parse(this.props.location);
        if (query.date_from) {
            query.date_from = query.date_from.replace(" - ", "&date_to=");
        }
        for (const key of Object.keys(query)) {
            if (query[key] === "") {
                delete query[key];
            }
        }
        const params = Object.entries(query)
            .map(([key, value]) => key + "=" + value)
            .join("&");
        this.props.dispatch(VoucherGetAction.voucherGet(params));
    }
    handleSelect = (e, options) => {
        localStorage.setItem(e.name, JSON.stringify(options));
    };
    handleDate = (event, picker, field) => {
        localStorage.setItem(
            field,
            JSON.stringify(TimeStampHelper.formatDate(picker.startDate._d))
        );
    };
    clearDateFunction = (date) => {
        localStorage.removeItem(date);
    };
    render() {
        if (!this.props.location) {
            localStorage.removeItem("promo_codes");
            localStorage.removeItem("types");
            localStorage.removeItem("status");
            localStorage.removeItem("start_date");
            localStorage.removeItem("end_date");
            localStorage.removeItem("startDate");
            localStorage.removeItem("endDate");
        }
        const option1 = localStorage.getItem("promo_codes");
        const option2 = localStorage.getItem("types");
        const option3 = localStorage.getItem("status");
        const option4 = localStorage.getItem("start_date");
        const option5 = localStorage.getItem("end_date");
        const promo_options = JSON.parse(option1);
        const type_options = JSON.parse(option2);
        const status_options = JSON.parse(option3);
        const startDate = JSON.parse(option4);
        const endDate = JSON.parse(option5);
        const status = [
            { value: "1", label: "Active" },
            { value: "0", label: "In Active" },
        ];
        const types = [
            { value: "1", label: "Fund" },
            { value: "2", label: "Free Sites" },
            { value: "3", label: "Fund And Free Sites" },
        ];

        return (
            <React.Fragment>
                <form>
                    <Row>
                        <Col md="6 mt-3">
                            <AsyncSelectField
                                name="promo_codes"
                                dispatch={this.props.dispatch}
                                placeholder="Search By Promo Code"
                                defaultValue={promo_options}
                            />
                        </Col>
                        <Col md="6 mt-3">
                            <InputSelectField
                                isMulti
                                name="types"
                                option={types}
                                placeholder="Search By Types"
                                onChange={(options, e) =>
                                    this.handleSelect(e, options)
                                }
                                defaultValue={type_options}
                                isClearable
                            />
                        </Col>
                        <Col md="6 mt-3">
                            <InputSelectField
                                isMulti
                                name="status"
                                option={status}
                                placeholder="Search By Status"
                                onChange={(options, e) =>
                                    this.handleSelect(e, options)
                                }
                                defaultValue={status_options}
                                isClearable
                            />
                        </Col>
                        <Col md="6 mt-3">
                            <InputDateField
                                name="date_from"
                                placeholder="Search By Date"
                            />
                        </Col>
                        <Col md="6 mt-3 voucher-filter">
                            <SingleDateField
                                name="start_date"
                                label="Start Date"
                                placeholder="Search By Start Date"
                                onChange={(event, picker) =>
                                    this.handleDate(event, picker, "start_date")
                                }
                                defaultValue={
                                    startDate === null ? "" : startDate
                                }
                                clearDate={() =>
                                    this.clearDateFunction("start_date")
                                }
                            />
                        </Col>
                        <Col md="6 mt-3 voucher-filter">
                            <SingleDateField
                                name="end_date"
                                label="End Date"
                                placeholder="Search By End Date"
                                onChange={(event, picker) =>
                                    this.handleDate(event, picker, "end_date")
                                }
                                defaultValue={endDate === null ? "" : endDate}
                                clearDate={() =>
                                    this.clearDateFunction("end_date")
                                }
                            />
                        </Col>
                        <Col md="6 mt-3">
                            <Button
                                type="submit"
                                className="btn btn-brand-02 btn-block"
                            >
                                Search
                            </Button>
                        </Col>
                    </Row>
                </form>
            </React.Fragment>
        );
    }
}

export default VoucherFilterForm;
