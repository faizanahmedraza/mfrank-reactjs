import React, { Component } from "react";
import PaginationBusiness from "Businesses/PaginationBusiness";
import Pagination from "react-bootstrap-4-pagination";
import "Assets/css/pagination.css";

class PaginationNumber extends Component {
	render() {
		return (
			<Pagination
				threeDots
				totalPages={this.props.totalPages}
				showMax={3}
				currentPage={this.props.currentPage}
				prevNext
				onClick={(number) =>
					PaginationBusiness.pagesGet(this.props.perPage, number)
				}
			/>
		);
	}
}

export default PaginationNumber;
