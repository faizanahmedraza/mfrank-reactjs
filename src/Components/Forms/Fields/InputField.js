import React from "react";

class InputField extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div>
					<label>{this.props.placeholder}</label>
					<input
						type="text"
						id={this.props.name}
						name={this.props.name}
						placeholder={this.props.placeholder}
						onInput={this.props.handleChange}
						className="form-control"
						required={this.props.required}
						defaultValue={this.props.defaultValue}
					/>
				</div>
			</React.Fragment>
		);
	}
}

export default InputField;
