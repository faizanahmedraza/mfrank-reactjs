import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import "Assets/css/pagination.css";
import PaginationBusiness from "Businesses/PaginationBusiness";

class PaginationDropDown extends Component {
    render() {
        return (
            <Dropdown>
                <Dropdown.Toggle
                    id="dropdown-basic"
                    className="footer-dropdown"
                >
                    {`${
                        this.props.perPage === undefined
                            ? 0
                            : this.props.perPage
                    } ${this.props.title} per page`}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item
                        onClick={() => {
                            PaginationBusiness.pagesGet(this.props.total, 1);
                        }}
                    >
                        {`All ${this.props.title}`}
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={() => {
                            PaginationBusiness.pagesGet(10, 1);
                        }}
                    >
                        {`10 ${this.props.title} per page`}
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={() => {
                            PaginationBusiness.pagesGet(25, 1);
                        }}
                    >
                        {`25 ${this.props.title} per page`}
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={() => {
                            PaginationBusiness.pagesGet(50, 1);
                        }}
                    >
                        {`50 ${this.props.title} per page`}
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={() => {
                            PaginationBusiness.pagesGet(100, 1);
                        }}
                    >
                        {`100 ${this.props.title} per page`}
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

export default PaginationDropDown;
