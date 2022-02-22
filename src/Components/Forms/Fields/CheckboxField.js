import React, { Component } from "react";

class CheckboxField extends Component {
	render() {
		return (
			<div className="bg-white bd pd-15 mg-b-20 clearfix">
				<label className="float-left mt-2">{this.props.title}</label>
				<span className="custom-switch float-right pl-0">
					<input
						type="checkbox"
						name={this.props.name}
						className="custom-control-input"
						id={this.props.id}
						checked={this.props.checked}
						defaultChecked={this.props.defaultChecked}
						onChange={this.props.onChange}
						readOnly
					/>

					<label
						className="custom-control-label"
						htmlFor={this.props.id}
						data-toggle="tooltip"
						data-placement="top"
						title={this.props.title}
					></label>
				</span>
			</div>
		);
	}
}

export default CheckboxField;
