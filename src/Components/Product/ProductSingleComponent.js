import React, { Component } from "react";
import { Row, Col, Badge } from "react-bootstrap";
import { connect } from "react-redux";
import ProductFirstAction from "Redux/V1/Products/First/ProductFirstAction";
import TemplateMain from "Templates/TemplateMain";
import "Assets/css/products.css";

class UpdateProductComponent extends Component {
    state = {
        id: "",
    };

    componentDidMount() {
        this.props.dispatch(
            ProductFirstAction.productFirst(this.props.match.params.id)
        );
    }

    render() {
        const productsTag = this.props.product.tags;
        let tagData;
        if (productsTag) {
            tagData = productsTag.map((tag) => {
                return (
                    <React.Fragment>
                        <Badge variant="primary">{tag.name}</Badge>{" "}
                    </React.Fragment>
                );
            });
        }
        
        return (
            <React.Fragment>
                <TemplateMain>
                    <div className="content content-components">
                        <div className="container">
                            <h4 className="tx-color-01 mg-b-15">
                                product Details
                            </h4>
                            <Row>
                                <Col sm={12} className="form-group">
                                    <label>Image</label>
                                    <div>
                                        <img
                                            width="400px"
                                            src={this.props.product.image}
                                            alt="there might be some data"
                                            className="center"
                                        ></img>
                                    </div>
                                </Col>
                                <Col sm={6} className="form-group">
                                    <label>Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your title"
                                        value={this.props.product.title}
                                    />
                                </Col>
                                <Col sm={6} className="form-group">
                                    <label>Description</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your description"
                                        value={this.props.product.description}
                                    />
                                </Col>
                                <Col sm={6} className="form-group">
                                    <label>Link</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your Link"
                                        value={this.props.product.link}
                                    />
                                </Col>
                                <Col sm={6} className="form-group">
                                    <label>Status</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your Status"
                                        value={this.props.product.status}
                                    />
                                </Col>
                                <Col sm={6} className="form-group">
                                    <label>Tags</label>
                                    <div>{tagData}</div>
                                </Col>

                                <Col sm={12}>
                                    <a
                                        href={
                                            "/products/edit/" + this.props.product.id
                                        }
                                        className="btn btn-primary"
                                    >
                                        Edit product
                                    </a>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </TemplateMain>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.products.detail.products,
    };
};

export default connect(mapStateToProps)(UpdateProductComponent);
