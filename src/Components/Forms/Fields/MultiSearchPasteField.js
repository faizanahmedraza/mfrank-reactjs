import React from "react";
import Select from "react-select";

class MultiSearchPasteField extends React.Component {
    state = {
        value: this.props.defaultValue,
    };

    handleInputChange = (value) => {
        if (value.includes(",")) {
            let valuesToSelect = [];
            let stateValue = this.state.value === null ? [] : this.state.value;
            const existingValues = stateValue.map((v) => v.value);

            const splitValues = value.split(",").map((v) => {
                return { label: v.trim(), value: v.trim().toLowerCase() };
            });

            var removeEmpty = splitValues.filter(function (el) {
                return el.value !== "";
            });

            removeEmpty.forEach((v) => {
                if (existingValues.includes(v)) {
                    return;
                }
                valuesToSelect.push(v);
            });

            this.handleSelectChange([...stateValue, ...valuesToSelect]);

            return "";
        }
        return value;
    };
    handleSelectChange = (value) => {
        localStorage.setItem("multi_domains", JSON.stringify(value));
        this.setState({ value });
    };
    render() {
        return (
            <React.Fragment>
                <div>
                    <Select
                        isMulti={this.props.isMulti === false ? false : true}
                        className="hide-options"
                        name={this.props.name}
                        delimiter=","
                        options={this.props.option}
                        placeholder={this.props.placeholder}
                        value={this.state.value}
                        isClearable={true}
                        onInputChange={this.handleInputChange}
                        onChange={this.handleSelectChange}
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default MultiSearchPasteField;
