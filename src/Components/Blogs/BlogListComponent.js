import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Row, Col } from "react-bootstrap";
import TemplateMain from "Templates/TemplateMain";
import BlogDeleteAction from "Redux/V1/Blogs/Delete/BlogDeleteAction";
import BlogFilterForm from "Components/Forms/BlogFilterForm";
import Confirm from "Helpers/ConfirmationHelper";
import NoDataHelper from "Helpers/NoDataHelper";
import BlogBusiness from "Businesses/Blogs/BlogBusiness";
import PaginationDropDown from "Components/Includes/DropDownComponent";
import PaginationNumber from "Components/Includes/PaginationComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "Assets/css/users.css";

class BlogListComponent extends Component {
    blogDelete = (id) => {
        Confirm(this.props.dispatch, BlogDeleteAction.blogDelete(id));
    };

    render() {
        const blogs = this.props.blogs.blogs;
        const loading = this.props.blogs.loading;
        const pagination = this.props.blogs.pagination;
        return (
            <React.Fragment>
                <TemplateMain>
                    <div className="content content-components">
                        <div className="container">

                            <h4 className="tx-color-01 mg-b-15 mt-3">
                                Blog List
                                <a
                                    href={"/blogs/add"}
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
                                            <th>Image</th>
                                            <th>Title</th>
                                            <th>Category</th>
                                            <th className="text-center action">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {blogs.length === null
                                            ? NoDataHelper.available()
                                            : NoDataHelper.available(
                                                  blogs,
                                                  loading
                                              )}
                                        {BlogBusiness.generate(
                                            blogs,
                                            this.onSwitch,
                                            this.blogDelete
                                        )}
                                    </tbody>
                                </Table>
                                <Row>
                                    <Col md={4}>
                                        <PaginationDropDown
                                            title={"Blogs"}
                                            perPage={pagination.per_page}
                                            total={pagination.total}
                                        />
                                    </Col>
                                    <Col md={4}>
                                        <PaginationNumber
                                            perPage={pagination.per_page}
                                            totalPages={pagination.total_pages}
                                            currentPage={
                                                pagination.current_page
                                            }
                                        />
                                    </Col>
                                    <Col md={4}></Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </TemplateMain>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs.list,
    };
};

export default connect(mapStateToProps)(BlogListComponent);
