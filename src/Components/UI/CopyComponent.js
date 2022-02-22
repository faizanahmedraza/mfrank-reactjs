import React, { Component } from "react";
import ClipBoardHelper from "Helpers/ClipBoardHelper";

class CopyComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <button
                    className="copyicon"
                    onClick={() => ClipBoardHelper.copy(this.props.copy)}
                >
                    <img src="/assets/img/copy.svg" alt="copyimage" />
                </button>
            </React.Fragment>
        );
    }
}

export default CopyComponent;
