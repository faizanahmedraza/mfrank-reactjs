import React, { Component } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
class SwitchComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <input
                    name={this.props.name}
                    type="checkbox"
                    className={"react-switch-checkbox " + this.props.class}
                    id={this.props.id}
                    onChange={this.props.change}
                    checked={this.props.check}
                    defaultChecked={this.props.defaultCheck}
                    disabled={this.props.disable}
                    value={this.props.value}
                />
                <OverlayTrigger
                    overlay={
                        <Tooltip
                            className={
                                this.props.tooltip ? "button-tooltip" : "d-none"
                            }
                        >
                            {this.props.tooltip}
                        </Tooltip>
                    }
                    placement="bottom"
                >
                    <label
                        className={"react-switch-label " + this.props.class}
                        htmlFor={this.props.id}
                    >
                        <span className={`react-switch-button`} />
                    </label>
                </OverlayTrigger>
            </React.Fragment>
        );
    }
}

export default SwitchComponent;
