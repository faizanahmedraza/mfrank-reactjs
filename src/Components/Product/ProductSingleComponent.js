import React, { Component } from "react";
import { Row, Col, Badge } from "react-bootstrap";
import { connect } from "react-redux";
import ProductFirstAction from "Redux/V1/Products/First/ProductFirstAction";
import TemplateMain from "Templates/TemplateMain";
// import "Assets/css/products.css";

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
        console.log("PROPS", this.props.product);
        const product = this.props.product;
        const {
            id,
            description,
            price,
            product_categories,
            product_images,
            product_metas,
            product_tags,
            product_variations,
            status,
            title,
        } = product;
        return (
            <React.Fragment>
                <TemplateMain>
                    <div className="content content-components">
                        <div className="container">
                            <h4 className="tx-color-01 mg-b-15 mb-5">
                                Product Details
                            </h4>
                            <div className="row">
                                <div className="col-12 col-md-4">
                                    <h5 className="mb-4">Product Info</h5>
                                    <p className="title">
                                        Title:
                                        <strong>{title}</strong>
                                    </p>
                                    <p className="title">
                                        Price:
                                        <strong>
                                            $<span>{price}</span>
                                        </strong>
                                    </p>
                                    <p className="title">
                                        Status:
                                        <strong>
                                            {+status === 1
                                                ? "Active"
                                                : "In Active"}
                                        </strong>
                                    </p>
                                    <p className="title">
                                        Tags:
                                        <strong>
                                            <ul className="hor-list">
                                                {product_tags
                                                    ? product_tags.map(
                                                          (cat, index) => {
                                                              console.log(
                                                                  "product variations",
                                                                  product_variations
                                                              );
                                                              return (
                                                                  <li
                                                                      key={
                                                                          index
                                                                      }
                                                                  >
                                                                      <span className="badge badge-primary">
                                                                          {
                                                                              cat.name
                                                                          }
                                                                      </span>
                                                                  </li>
                                                              );
                                                          }
                                                      )
                                                    : ""}
                                            </ul>
                                        </strong>
                                    </p>
                                    <p className="title">
                                        Categories:
                                        <strong>
                                            <ul className="hor-list">
                                                {product_categories
                                                    ? product_categories.map(
                                                          (cat, index) => {
                                                              return (
                                                                  <li
                                                                      key={
                                                                          index
                                                                      }
                                                                  >
                                                                      <span className="badge badge-primary">
                                                                          {
                                                                              cat.name
                                                                          }
                                                                      </span>
                                                                  </li>
                                                              );
                                                          }
                                                      )
                                                    : ""}
                                            </ul>
                                        </strong>
                                    </p>
                                    <p className="title">
                                        Description:
                                        <span className="ml-2">
                                            {description}
                                        </span>
                                    </p>
                                </div>
                                <div className="col-12 col-md-8">
                                    <label
                                        htmlFor="image"
                                        className="font-bold"
                                    >
                                        Images
                                    </label>
                                    {product_images
                                        ? product_images.map(
                                              (element, index) => {
                                                  return (
                                                      <div className="img-list-wrap">
                                                          <img
                                                              src={
                                                                  element.image
                                                              }
                                                              alt={index}
                                                          />
                                                      </div>
                                                  );
                                              }
                                          )
                                        : ""}
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col-12">
                                    <h5>Product Variation</h5>
                                </div>
                            </div>
                            {product_variations
                                ? product_variations.map((variation, index) => {
                                      const {
                                          color,
                                          cost,
                                          images,
                                          quantity,
                                          size,
                                      } = variation;
                                      return (
                                          <>
                                              <div
                                                  className="row mb-5"
                                                  key={index}
                                              >
                                                  <div className="col-12 col-md-4">
                                                      <p className="title">
                                                          Color:
                                                          <strong>
                                                              {color?.name}
                                                          </strong>
                                                      </p>
                                                      <p className="title">
                                                          Size:
                                                          <strong>
                                                              {size?.name}
                                                          </strong>
                                                      </p>
                                                      <p className="title">
                                                          Price:
                                                          <strong>
                                                              {cost ? cost : ""}
                                                          </strong>
                                                      </p>
                                                      <p className="title">
                                                          Quantity:
                                                          <strong>
                                                              {quantity
                                                                  ? quantity
                                                                  : ""}
                                                          </strong>
                                                      </p>
                                                  </div>
                                                  <div className="col-12 col-md-8">
                                                      <label
                                                          htmlFor="image"
                                                          className="font-bold"
                                                      >
                                                          Images
                                                      </label>
                                                      {images
                                                          ? images.map(
                                                                (
                                                                    element,
                                                                    index
                                                                ) => {
                                                                    return (
                                                                        <div className="img-list-wrap">
                                                                            <img
                                                                                src={
                                                                                    element
                                                                                }
                                                                                alt={
                                                                                    index
                                                                                }
                                                                            />
                                                                        </div>
                                                                    );
                                                                }
                                                            )
                                                          : ""}
                                                  </div>
                                              </div>
                                          </>
                                      );
                                  })
                                : ""}
                            <div className="row mb-4">
                                <div className="col-12">
                                    <h5>Product Metas</h5>
                                </div>
                            </div>
                            {product_metas
                                ? product_metas.map((meta, index) => {
                                      const { key, value } = meta;
                                      return (
                                          <>
                                              <div className="row">
                                                  <div className="col-12">
                                                      <p className="title">
                                                          Key:
                                                          <strong>
                                                              {key ? key : ""}
                                                          </strong>
                                                      </p>
                                                      <p className="title">
                                                          Value:
                                                          <strong>
                                                              {value
                                                                  ? value
                                                                  : ""}
                                                          </strong>
                                                      </p>
                                                  </div>
                                              </div>
                                          </>
                                      );
                                  })
                                : ""}

                            <div className="row">
                                <div className="col-12">
                                    <a
                                        href={"/edit/" + id}
                                        className="btn btn-outline-primary"
                                    >
                                        Edit product
                                    </a>
                                </div>
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
        product: state.products.detail.product,
    };
};

export default connect(mapStateToProps)(UpdateProductComponent);
