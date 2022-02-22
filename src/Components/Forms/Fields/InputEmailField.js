import React from "react";

class InputEmailField extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div>
					<label>{this.props.placeholder}</label>
					<input
						type="email"
						id={this.props.name}
						name={this.props.name}
						placeholder={this.props.placeholder}
						required={this.props.required}
					/>
				</div>
			</React.Fragment>
		);
	}
}

export default InputEmailField;
