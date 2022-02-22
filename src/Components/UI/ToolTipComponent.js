import React, { Component } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

class ToolTipComponent extends Component {
    render() {
        const { iconClassName } = this.props;
        return (
            <React.Fragment>
                <div
                    className={this.props.containerClasses}
                    onClick={this.props.onClick}
                >
                    <OverlayTrigger
                        aria-haspopup="true"
                        data-disable-for-touch="false"
                        data-disable-for-mobile="true"
                        placement={"bottom"}
                        overlay={
                            <Tooltip
                                id="tooltip"
                                className="button-tooltip site-backup-tooltip site-clone-tooltip "
                            >
                                {this.props.text}
                            </Tooltip>
                        }
                    >
                        <FontAwesomeIcon
                            icon={faInfoCircle ? faInfoCircle : ""}
                            className={iconClassName}
                        />
                    </OverlayTrigger>
                </div>
            </React.Fragment>
        );
    }
}

export default ToolTipComponent;
