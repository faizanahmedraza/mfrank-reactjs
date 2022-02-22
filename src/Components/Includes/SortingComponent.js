import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSortDown,
    faSortUp,
    faSort,
} from "@fortawesome/free-solid-svg-icons";
import UrlHelper from "Helpers/UrlHelper";

class SortingComponent extends Component {
    handleSort = (e) => {
        e.preventDefault();
        let orderBy = "asc";
        const target = e.currentTarget.attributes["name"].value;
        const params = UrlHelper.parseParams(window.location.search);

        if (params.order_by === "asc" && params.column === target) {
            orderBy = "desc";
        } else if (params.order_by === "desc" && params.column === target) {
            orderBy = "";
        }
        params.order_by = orderBy;
        params.column = target;
        window.location.href = `
		${window.location.origin}${window.location.pathname}?${UrlHelper.stringify(
            params
        )}`;
    };
    render() {
        const getParams = UrlHelper.parseParams(window.location.search);
        return (
            <th
                className="sort-btn"
                onClick={(e) => this.handleSort(e, 0)}
                name={this.props.name}
            >
                <span>{this.props.title}</span>
                {this.props.name === getParams.column &&
                getParams.order_by === "asc" ? (
                    <FontAwesomeIcon icon={faSortUp} className="float-right" />
                ) : this.props.name === getParams.column &&
                  getParams.order_by === "desc" ? (
                    <FontAwesomeIcon
                        icon={faSortDown}
                        className="float-right"
                    />
                ) : (
                    <FontAwesomeIcon icon={faSort} className="float-right" />
                )}
            </th>
        );
    }
}

export default SortingComponent;
