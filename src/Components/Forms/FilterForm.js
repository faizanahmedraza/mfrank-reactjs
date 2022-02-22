import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Col } from "react-bootstrap";
import InputDateField from "./Fields/InputDateField";
import InputSelectField from "./Fields/InputSelectField";
import UserSearchAction from "Redux/V1/Users/Search/UserSearchAction";
import UserService from "Services/V1/UserService";
import AsyncSelect from "react-select/async";

class FilterForm extends Component {
	state = {
		inputValue: "",
	};

	smartSearchFilter = async (value) => {
		if (value.length > 2) {
			// if (type === 'user') {
			this.props.dispatch(
				UserSearchAction.searchUsers({
					field: "full_name",
					value: value,
				})
			);
			// }

			const response = await UserService.search({
				field: "full_name",
				value: value,
			});

			return response.data.users;
		}
	};
	handleMultiSelect = (e, options) => {
		let { form } = this.state;
		form[e.name] = options;
		this.setState({
			form,
		});
	};

	loadOptions = async (inputValue, callback) => {
		const data = await this.smartSearchFilter(inputValue);
		const result = data.map((d) => {
			return {
				value: `${d.first_name} ${d.last_name}`,
				label: `${d.first_name} ${d.last_name}`,
			};
		});
		callback(result);
	};

	render() {
		const user_status = [
			{ value: "active", label: "Active" },
			{ value: "pending", label: "Pending" },
			{ value: "blocked", label: "Blocked" },
		];
		const customer_fullname = this.props.customers.map(function (customer) {
			return { value: customer.first_name, label: customer.first_name };
		});
		const customer_email = this.props.customers.map(function (customer) {
			return { value: customer.email, label: customer.email };
		});
		const customer_status = [
			{ value: "active", label: "Active" },
			{ value: "pending", label: "Pending" },
			{ value: "blocked", label: "Blocked" },
		];
		const site_customer_name = this.props.sites.map(function (site) {
			return { value: site.user.first_name, label: site.user.first_name };
		});
		const site_name = this.props.sites.map(function (site) {
			return { value: site.name, label: site.name };
		});
		const site_domain = this.props.sites.map(function (site) {
			return { value: site.host, label: site.host };
		});
		const invoice_customer_name = this.props.invoices.map(function (
			invoice
		) {
			return {
				value: invoice.customer.fullname,
				label: invoice.customer.fullname,
			};
		});
		const invoice_number = this.props.invoices.map(function (invoice) {
			return { value: invoice.reference, label: invoice.reference };
		});
		const invoice_status = [
			{ value: "paid", label: "Paid" },
			{ value: "pending", label: "Pending" },
			{ value: "overdue", label: "Overdue" },
		];

		// const search = this.props.users.map(function (user) {
		//     return { value: user.first_name, label: user.first_name };
		// });
		// console.log(search, "firstname search");

		return (
			<React.Fragment>
				<form>
					<Form.Row className="align-items-center mb-4">
						{this.props.fields.indexOf("async") !== -1 ? (
							<Col md="3 mb-3">
								<AsyncSelect
									cacheOptions
									loadOptions={this.loadOptions}
									//defaultOptions
									placeholder="Search User"
									name="full_name"
								/>
							</Col>
						) : null}

						{this.props.fields.indexOf("user_search") !== -1 ? (
							<Col md="3 mb-3">
								<input
									type="text"
									name="full_name"
									placeholder="Search"
									className="form-control"
									onChange={(e) => {
										this.smartSearchFilter(e, "user");
									}}
								/>
							</Col>
						) : null}

						{this.props.fields.indexOf("user_status") !== -1 ? (
							<Col md="3 mb-3">
								<InputSelectField
									name="status"
									option={user_status}
									placeholder="Search By Status"
								/>
							</Col>
						) : null}

						{this.props.fields.indexOf("user_date") !== -1 ? (
							<Col md="3 mb-3">
								<InputDateField
									name="created_at"
									placeholder="Search By Created Date"
								/>
							</Col>
						) : null}

						{this.props.fields.indexOf("customer_name") !== -1 ? (
							<Col md="3 mb-3">
								<InputSelectField
									name="first_name"
									option={customer_fullname}
									placeholder="Search By Name"
								/>
							</Col>
						) : null}

						{this.props.fields.indexOf("customer_email") !== -1 ? (
							<Col md="3 mb-3">
								<InputSelectField
									name="email"
									option={customer_email}
									placeholder="Search By Email"
								/>
							</Col>
						) : null}

						{this.props.fields.indexOf("customer_status") !== -1 ? (
							<Col md="3 mb-3">
								<InputSelectField
									name="status"
									option={customer_status}
									placeholder="Search By Status"
								/>
							</Col>
						) : null}

						{this.props.fields.indexOf("customer_date") !== -1 ? (
							<Col md="3 mb-3">
								<InputDateField
									name="created_at"
									placeholder="Search By Created Date"
								/>
							</Col>
						) : null}

						{this.props.fields.indexOf("site_customer_name") !==
						-1 ? (
							<Col md="3 mb-3">
								<InputSelectField
									name="fullname"
									option={site_customer_name}
									placeholder="Search By Name"
								/>
							</Col>
						) : null}

						{this.props.fields.indexOf("site_name") !== -1 ? (
							<Col md="3 mb-3">
								<InputSelectField
									name="site_name"
									option={site_name}
									placeholder="Search By Site Title"
								/>
							</Col>
						) : null}

						{this.props.fields.indexOf("site_domain") !== -1 ? (
							<Col md="3 mb-3">
								<InputSelectField
									name="host"
									option={site_domain}
									placeholder="Search By Domain"
								/>
							</Col>
						) : null}

						{this.props.fields.indexOf("site_date") !== -1 ? (
							<Col md="3 mb-3">
								<InputDateField
									name="created_at"
									placeholder="Search By Created Date"
								/>
							</Col>
						) : null}

						{this.props.fields.indexOf("invoice_customer_name") !==
						-1 ? (
							<Col md="3 mb-3">
								<InputSelectField
									name="full_name"
									option={invoice_customer_name}
									placeholder="Search By Name"
								/>
							</Col>
						) : null}

						{this.props.fields.indexOf("invoice_number") !== -1 ? (
							<Col md="3 mb-3">
								<InputSelectField
									name="reference"
									option={invoice_number}
									placeholder="Search By Invoice Number"
								/>
							</Col>
						) : null}

						{this.props.fields.indexOf("invoice_status") !== -1 ? (
							<Col md="3 mb-3">
								<InputSelectField
									name="status"
									option={invoice_status}
									placeholder="Search By Status"
								/>
							</Col>
						) : null}

						{this.props.fields.indexOf("invoice_date") !== -1 ? (
							<Col md="3 mb-3">
								<InputDateField
									name="created_at"
									placeholder="Search By Issue Date"
								/>
							</Col>
						) : null}

						<Col md="3 mb-3">
							<Button
								type="submit"
								className="btn btn-brand-02 btn-block"
							>
								Search
							</Button>
						</Col>
						{/* <Col md="3 mt-3">
                            <Button
                                type="reset"
                                className="btn btn-secondary btn-block"
                                onClick={this.handleClear}
                            >
                                Clear
                                </Button>
                        </Col> */}
					</Form.Row>
				</form>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		state,
		customers: state.customers.customers,
		sites: state.sites.sites,
		invoices: state.invoices.invoices,
		user_search: state.user_search.users,
		users: state.users.users,
	};
};

export default connect(mapStateToProps)(FilterForm);
