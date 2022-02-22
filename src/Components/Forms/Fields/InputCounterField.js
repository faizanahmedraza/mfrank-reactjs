import React from "react";

class InputCounterField extends React.Component {
    // state = {
    //     counter: 0,
    // };

    // onIncrease = () => {
    //     let counter = this.state.counter + 1;
    //     this.setState({ counter });
    // };

    // onDecrease = () => {
    //     if (this.state.counter > 0) {
    //         let counter = this.state.counter - 1;
    //         this.setState({ counter });
    //     }
    // };
    render() {
        return (
            <React.Fragment>
                <div className="input-group mb-3">
                    <div
                        // className="input-group-prepend"
                        className={`input-group-prepend ${
                            this.props.disableClass ? "" : "disableClass"
                        }`}
                    >
                        <button
                            className="btn btn-outline-secondary"
                            onClick={this.props.onDecrease}
                        >
                            -
                        </button>
                        <input
                            className="form-control text-center"
                            readOnly
                            name={this.props.name}
                            onChange={(e) => this.props.handleChange(e)}
                            value={this.props.value}
                        />
                        <button
                            className="btn btn-outline-secondary"
                            onClick={this.props.onIncrease}
                        >
                            +
                        </button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default InputCounterField;
