import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
// import TemplateMain from "Templates/TemplateMain";
// import BlogDeleteAction from "Redux/V1/Products/Delete/ProductDeleteAction";
// import BlogFilterForm from "Components/Forms/BlogFilterForm";
import Confirm from "Helpers/ConfirmationHelper";
// import NoDataHelper from "Helpers/NoDataHelper";
import BlogBusiness from "Businesses/Blogs/BlogBusiness";
import ProductGetAction from 'Redux/V1/Products/Get/ProductGetAction';
import ProductDeleteAction from 'Redux/V1/Products/Delete/ProductDeleteAction';
// import PaginationDropDown from "Components/Includes/DropDownComponent";
// import PaginationNumber from "Components/Includes/PaginationComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "Assets/css/users.css";

class BlogListComponent extends Component {
    componentDidMount() {
        this.props.dispatch(ProductGetAction.productGet());
    }

    blogDelete = (id) => {
        Confirm(this.props.dispatch, ProductDeleteAction.productDelete(id));
    };

    render() {
        const blogs = this.props.products.products.data;
        // const loading = this.props.products.products.data;
        return (
            <React.Fragment>
                {/* <TemplateMain> */}
                    <div className="content content-components">
                        <div className="container">

                            <h4 className="tx-color-01 mg-b-15 mt-3">
                                Blog List
                                <a
                                    href={"/add"}
                                    className="btn-link ml-2"
                                    title="Add"
                                >
                                    <FontAwesomeIcon
                                        icon={faPlus}
                                        className="space-btn"
                                    />
                                </a>
                            </h4>
                            <div className="blog-list-page">
                                <Table
                                    striped
                                    bordered
                                    hover
                                    className="table-responsive-sm"
                                >
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Title</th>
                                            <th>Description</th>
                                            <th>Status</th>
                                            <th className="text-center action">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {/* {blogs.length === null
                                            ? NoDataHelper.available()
                                            : NoDataHelper.available(
                                                  blogs,
                                                  loading
                                              )} */}
                                        {BlogBusiness.generate(
                                            blogs,
                                            this.onSwitch,
                                            this.blogDelete
                                        )}
                                    </tbody>
                                </Table>
                                {/* <Row>
                                    <Col md={4}>
                                        <PaginationDropDown
                                            title={"Blogs"}
                                            // perPage={pagination.per_page}
                                            // total={pagination.total}
                                        />
                                    </Col>
                                    <Col md={4}>
                                        <PaginationNumber
                                            // perPage={pagination.per_page}
                                            // totalPages={pagination.total_pages}
                                            // currentPage={
                                            //     pagination.current_page
                                            // }
                                        />
                                    </Col>
                                    <Col md={4}></Col>
                                </Row> */}
                            </div>
                        </div>
                    </div>
                {/* </TemplateMain> */}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.list,
    };
};

export default connect(mapStateToProps)(BlogListComponent);
