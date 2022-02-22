import React, { Component } from "react";

class InputText extends Component {
    render() {
        return (
            <div className="form-group">
                <input
                    type={this.props.type}
                    name={this.props.name}
                    className="form-control"
                    placeholder={this.props.placeholder}
                    onChange={this.props.handleChange}
                    onBlur={this.props.handleBlur}
                    value={this.props.value}
                    required={this.props.required}
                    id={this.props.id}
                />
            </div>
        );
    }
}

export default InputText;
