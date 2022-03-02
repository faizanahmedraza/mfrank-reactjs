import React, { Component } from "react";
import { connect } from "react-redux";
// import { Table } from "react-bootstrap";
// import TemplateMain from "Templates/TemplateMain";
// import ProductDeleteAction from "Redux/V1/Products/Delete/ProductDeleteAction";
// import ProductFilterForm from "Components/Forms/ProductFilterForm";
import Confirm from "Helpers/ConfirmationHelper";
// import NoDataHelper from "Helpers/NoDataHelper";
// import ProductBusiness from "Businesses/Products/ProductBusiness";
import ProductGetAction from 'Redux/V1/Products/Get/ProductGetAction';
import ProductDeleteAction from 'Redux/V1/Products/Delete/ProductDeleteAction';
// import PaginationDropDown from "Components/Includes/DropDownComponent";
// import PaginationNumber from "Components/Includes/PaginationComponent";
import Capitilize from 'Helpers/CapitilizeHelper';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductStatusAction from "Redux/V1/Products/Status/ProductStatusAction"
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { MDBDataTable } from 'mdbreact';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import "Assets/css/users.css";

class ProductListComponent extends Component {
    componentDidMount() {
        this.props.dispatch(ProductGetAction.productGet());
    }

    productDelete = (id) => {
        Confirm(this.props.dispatch, ProductDeleteAction.productDelete(id));
    };

    onSwitch = (id) => {
        Confirm(this.props.dispatch, ProductStatusAction.productStatus(id));
    };

    render() {
        const products = this.props.products.products.data;
        console.log("Before Tabel", products)
        const data = {
            columns: [
                {
                    label: 'ID',
                    field: 'id',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Title',
                    field: 'title',
                    sort: 'asc',
                    width: 180
                },
                {
                    label: 'Description',
                    field: 'description',
                    sort: 'asc',
                    width: 180
                },
                {
                    label: 'Status',
                    field: 'status',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Action',
                    field: 'action',
                    sort: 'asc',
                    width: 270
                }
            ],
            rows: products.map((data) => {
                const { id, title, description, status } = data;
                const titleJSX = () => {
                    return (
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={'/edit/' + id}>
                            {Capitilize.capital(title)}
                        </a>
                    )
                }
                const statusJSX = () => {
                    return (
                        <span className="custom-control custom-switch">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id={"customSwitches" + id}
                            checked={
                                +status === 1 ? true : false
                            }

                            onChange={() =>
                                this.onSwitch(
                                    status
                                )
                            }
                        />

                        <label
                            className="custom-control-label"
                            htmlFor={"customSwitches" + id}
                            data-toggle="tooltip"
                            data-placement="top"
                            title={"Active/In Active"}
                        ></label>
                    </span>
                    )
                }
                const actionJSX = () => {
                    return (
                        <>
                            <a
                                href={"/edit/" + id}
                                className={`btn btn-link`}
                                title={"Edit"
                                }
                            >
                                <FontAwesomeIcon icon={faPencilAlt} />
                            </a>
                            <button
                                className="btn text-danger"
                                title={"Delete"
                                }
                                onClick={() => this.productDelete(id)}
                                disabled={
                                    false
                                }
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </>
                    )
                }
                return {
                    id,
                    title: titleJSX(),
                    description,
                    status: statusJSX(),
                    action: actionJSX(),
                }
            })
        }
        return (
            <React.Fragment>
                {/* <TemplateMain> */}
                    <div className="content content-components">
                        <div className="container">

                            <h4 className="tx-color-01 mg-b-15 mt-3">
                            Product List
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
                                {/* <Table
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
                                        {/* {ProductBusiness.generate(
                                            products,
                                            this.onSwitch,
                                            this.productDelete
                                        )} */}
                                    {/* </tbody> */}
                                {/* </Table>  */}
                                <MDBDataTable
                                    striped
                                    bordered
                                    hover
                                    data={data}
                                />
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

export default connect(mapStateToProps)(ProductListComponent);
