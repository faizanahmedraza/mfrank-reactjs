import React from 'react';
import Select from 'react-select';
import ErrorBusiness from 'Businesses/ErrorBusiness';

class InputSelectField extends React.Component {
    state = {
        error: null,
    };
    render() {
        let errorSubmit = ErrorBusiness.errorCheck(
            this.props.error,
            this.props.name
        );
        return (
            <React.Fragment>
                <div>
                    {/* <label>{this.props.placeholder}</label> */}
                    <span
                        className={`form-group1 ${
                            this.state.error || errorSubmit
                                ? 'is-invalid error-input'
                                : ''
                        }`}>
                        <Select
                            isMulti={
                                this.props.isMulti === false ? false : true
                            }
                            name={this.props.name}
                            delimiter={this.props.delimiter}
                            options={this.props.option}
                            placeholder={this.props.placeholder}
                            onChange={this.props.onChange}
                            required={this.props.required}
                            value={this.props.value}
                            defaultValue={this.props.defaultValue}
                            isClearable={this.props.isClearable}
                            isDisabled={this.props.disabled ? true : false}
                            className={
                                this.state.error || errorSubmit
                                    ? 'error-select'
                                    : ''
                            }
                            menuPortalTarget={document.body}
                            styles={{
                                menuPortal: (base) => ({
                                    ...base,
                                    zIndex: 9999,
                                }),
                            }}
                        />
                        {this.state.error || errorSubmit ? (
                            <p className="text-danger validation-message">
                                {this.state.error}
                                {!this.state.error ? errorSubmit : ''}
                            </p>
                        ) : null}
                    </span>
                </div>
            </React.Fragment>
        );
    }
}

export default InputSelectField;
