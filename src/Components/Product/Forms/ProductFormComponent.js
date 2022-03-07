import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import InputUpdateField from "Components/Forms/Fields/InputUpdateField";
import InputSelectField from "Components/Forms/Fields/InputSelectField";
import productCreateAction from "Redux/V1/Products/Post/ProductPostAction";
import TagListAction from "Redux/V1/Tags/Get/TagGetAction";
import ColorListAction from "Redux/V1/Variation/Color/Get/ColorGetAction";
import SizeListAction from "Redux/V1/Variation/Size/Get/SizeGetAction";
import CategoryListAction from "Redux/V1/Categories/Get/CategoryGetAction";
import CategoryPostAction from "Redux/V1/Categories/Post/CategoryPostAction";
import ProductDetailAction from "Redux/V1/Products/First/ProductFirstAction";
import productUpdateAction from "Redux/V1/Products/Put/ProductPutAction";
import ProductValidation from "Validations/ProductValidation";
import ErrorBusiness from "Businesses/ErrorBusiness";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "Assets/css/blogs.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class productFormComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                title: null,
                name: null,
                parent_category: null,
                categories: [],
                tags: [],
                // new_tags: [],
                price: null,
                status: null,
                description: null,
                images: [],
            },
            default_data: false,
            variations: [],
            custom_field: [],
            show: false,
        };
    }

    componentDidMount() {
        this.props.dispatch(TagListAction.tagGet());
        this.props.dispatch(ColorListAction.colorGet());
        this.props.dispatch(SizeListAction.sizeGet());
        this.props.dispatch(CategoryListAction.categoryGet());
        if (this.props.method === "PUT")
            this.props.dispatch(
                ProductDetailAction.productFirst(this.props.params)
            );
    }

    handleColorChange = (e, options, index) => {
        // const index = e.target // .dataset.index
        // const index = index
        let variations = [...this.state.variations];
        variations[index].color = options;
        this.setState({
            variations,
        });
    };

    handleSizeChange = (e, options, index) => {
        let variations = [...this.state.variations];
        variations[index].size = options;
        this.setState({
            variations,
        });
    };

    handleVariationChange = (e) => {
        const index = e.target.dataset.index;
        let variations = [...this.state.variations];
        variations[index][e.target.name] = e.target.value;
        this.setState({
            variations,
        });
    };

    handleCustomFieldChange = (e) => {
        const index = e.target.dataset.index;
        let custom_field = [...this.state.custom_field];
        custom_field[index][e.target.name] = e.target.value;
        this.setState({
            custom_field,
        });
    };

    handleChange = (e) => {
        // const index = e.target.dataset.index
        let variations = [...this.state.variations];

        const errorUpdate = ErrorBusiness.errorRemove(
            this.state.error,
            e.target.name
        );
        this.setState({
            error: errorUpdate,
        });
        let { form } = this.state;
        form[e.target.name] = e.target.value;

        this.setState({
            form,
            variations,
        });
    };

    handleMultiSelect = (e, options) => {
        const errorUpdate = ErrorBusiness.errorRemove(this.state.error, e.name);
        this.setState({
            error: errorUpdate,
        });
        let { form } = this.state;
        form[e.name] = options;
        this.setState({
            form,
        });
    };

    setSelectedProductFiles = async (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const newImagesPromises = [];
            for (let i = 0; i < e.target.files.length; i++) {
                newImagesPromises.push(this.toBase64(e.target.files[i]));
            }
            const newImages = await Promise.all(newImagesPromises);
            let { form } = this.state;
            this.setState({
                form: {
                    ...form,
                    images: [...newImages],
                },
            });
        }
    };

    setSelectedProductFilesForVar = async (e) => {
        const index = e.target.dataset.index;
        let newImages = [];
        if (e.target.files && e.target.files.length > 0) {
            const newImagesPromises = [];
            for (let i = 0; i < e.target.files.length; i++) {
                newImagesPromises.push(this.toBase64(e.target.files[i]));
            }
            newImages = await Promise.all(newImagesPromises);
        }
        let variations = [...this.state.variations];
        variations[index].images = [...newImages];
        this.setState({ variations });
    };

    toBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });

    handleFormSubmit = (e) => {
        e.preventDefault();
        // let { form, variations } = this.state;
        if (this.props.method === "PUT") {
            let { form } = this.state;
            form["variations"] = this.state.variations;
            form["custom_field"] = this.state.custom_field;
            this.props.dispatch(
                productUpdateAction.productPut({
                    form: this.state.form,
                    id: this.props.params,
                })
            );
        }
        if (this.props.method === "POST") {
            let { form } = this.state;
            form["variations"] = this.state.variations;
            form["custom_field"] = this.state.custom_field;
            ProductValidation.validate(this.state.form, { abortEarly: false })
                .then(() => {
                    this.props.dispatch(
                        productCreateAction.productPost(this.state.form)
                    );
                })
                .catch((err) => {
                    this.setState({
                        error: ErrorBusiness.errorGet(err),
                    });
                });
        }
    };

    setDefaultData = () => {
        if (this.props.method === "PUT") {
            let { form, default_data, variations, custom_field } = this.state;

            if (default_data === false) {
                setTimeout(() => {
                    form.title = this.props.product.title;
                    form.description = this.props.product.description;
                    form.images = this.props.product.product_images;
                    form.price = this.props.product.price;

                    form.images = this.props.product.product_images.map(
                        (cat) => {
                            return cat.image;
                        }
                    );
                    custom_field = this.props.product.product_metas.map(
                        (data) => {
                            return {
                                custom_field_key: data.key,
                                custom_field_value: data.value,
                            };
                        }
                    );
                    form.status = {
                        value: this.props.product.status
                            ? "Active"
                            : "In Active",
                        label: this.props.product.status
                            ? "Active"
                            : "In Active",
                    };
                    form.description = this.props.product.description;
                    form.categories = this.props.product.product_categories.map(
                        (cat) => {
                            return { value: cat.id, label: cat.name };
                        }
                    );

                    form.tags = this.props.product.product_tags.map((tag) => {
                        return { value: tag.id, label: tag.name };
                    });

                    variations = this.props.product.product_variations.map(
                        (data) => {
                            return {
                                color: {
                                    value: data.color.id,
                                    label: data.color.name,
                                },
                                size: {
                                    value: data.size.id,
                                    label: data.size.name,
                                },
                                images: data.images,
                                cost: data.cost,
                                quantity: data.quantity,
                            };
                        }
                    );

                    this.setState({
                        form,
                        default_data: true,
                        variations,
                        custom_field,
                    });
                }, 5000);
            }
        }
    };

    handleCloneChange(i, e) {
        let formValues = this.state.variations;
        formValues[i][e.target.name] = e.target.value;
        this.setState({ formValues });
    }

    addFormFields() {
        this.setState({
            variations: [
                ...this.state.variations,
                { color: "", size: "", images: [] },
            ],
        });
    }

    removeFormFields(i) {
        let formValues = this.state.variations;
        formValues.splice(i, 1);
        this.setState({ formValues });
    }

    removeProductImage(index) {
        let { images } = this.state.form;
        images.splice(index, 1);
        this.setState({
            images: images,
        });
    }

    removeImage(i, index) {
        let formValues = this.state.variations[index].images;
        formValues.splice(i, 1);
        this.setState({ formValues });
    }

    handleCustomFieldCloneChange(i, e) {
        let formValues = this.state.custom_field;
        formValues[i][e.target.name] = e.target.value;
        this.setState({ formValues });
    }

    addFormCustomFields() {
        this.setState({
            custom_field: [
                ...this.state.custom_field,
                { custom_field_key: "", custom_field_value: "" },
            ],
        });
    }

    removeFormCustomFields(i) {
        let formValues = this.state.custom_field;
        formValues.splice(i, 1);
        this.setState({ formValues });
    }
    maxLengthCheck = (object) => {
        if (object.target.value.length > object.target.maxLength) {
            object.target.value = object.target.value.slice(
                0,
                object.target.maxLength
            );
        }
    };

    submitCategory = (e) => {
        e.preventDefault();
        const { form } = this.state;
        const data = {
            name: this.state.form.name,
            parent_category: this.state.form.parent_category,
        };
        console.log("data", data);
        this.props.dispatch(CategoryPostAction.categoryPost(data));
        form.name = "";
        form.parent_category = "";
        this.setState({
            form,
        });
    };

    render() {
        const tagsOptions = this.props.tags.map(function (tag) {
            return { value: tag.id, label: tag.name };
        });

        const catOptions = this.props.categories.map(function (category) {
            return { value: category.id, label: category.name };
        });

        const status = [
            { value: "active", label: "Active" },
            { value: "In Active", label: "In Active" },
        ];

        const color = this.props.colors.map(function (color) {
            return { value: color.id, label: color.name };
        });

        const size = this.props.sizes.map(function (size) {
            return { value: size.id, label: size.name };
        });

        this.setDefaultData();

        return (
            <React.Fragment>
                <form
                    method={this.props.method}
                    onSubmit={this.handleFormSubmit}
                >
                    <Row>
                        <Col sm={6}>
                            <InputUpdateField
                                name="title"
                                placeholder="Product Title"
                                onChange={this.handleChange}
                                defaultValue={this.state.form.title}
                                schema={ProductValidation}
                                error={this.state.error}
                            />
                        </Col>
                        <Col sm={6}>
                            <label className="icon-wrap-label">
                                Select Product Category
                                <div
                                    className="add-icon-wrap"
                                    onClick={() =>
                                        this.setState({ show: true })
                                    }
                                >
                                    <FontAwesomeIcon icon={faPlus} />
                                </div>
                            </label>
                            <InputSelectField
                                name="categories"
                                placeholder="Select Product Category"
                                option={catOptions}
                                onChange={(options, e) =>
                                    this.handleMultiSelect(e, options)
                                }
                                value={this.state.form.categories}
                                schema={ProductValidation}
                                error={this.state.error}
                            />
                        </Col>
                        <Col sm={6}>
                            <label>Select Product Tag</label>
                            <InputSelectField
                                name="tags"
                                placeholder="Select Product Tag"
                                option={tagsOptions}
                                onChange={(options, e) =>
                                    this.handleMultiSelect(e, options)
                                }
                                value={this.state.form.tags}
                                schema={ProductValidation}
                                error={this.state.error}
                            />
                        </Col>
                        <Col sm={6}>
                            {/* <InputUpdateField
                                name="price"
                                type="number"
                                placeholder="Product Price"
                                onChange={this.handleChange}
                                defaultValue={this.state.form.price}
                                schema={ProductValidation}
                                error={this.state.error}
                            /> */}
                            <label>Product Price</label>
                            <input
                                value={this.state.form.price}
                                type="number"
                                name="price"
                                id="price"
                                className="form-control"
                                onChange={this.handleChange}
                                maxLength="8"
                                onInput={this.maxLengthCheck}
                                placeholder="Enter Price"
                            />
                        </Col>
                        <Col sm={6}>
                            <label htmlFor="Product Image">Product Image</label>
                            <div className="multi-upload-file">
                                <input
                                    type="file"
                                    multiple
                                    onChange={this.setSelectedProductFiles}
                                />
                            </div>
                        </Col>
                        <Col sm={6}>
                            <label>Status</label>
                            <InputSelectField
                                name="status"
                                placeholder="Status"
                                option={status}
                                onChange={(options, e) =>
                                    this.handleMultiSelect(e, options)
                                }
                                value={this.state.form.status}
                                schema={ProductValidation}
                                error={this.state.error}
                                isMulti={false}
                            />
                        </Col>
                        <Col sm={12}>
                            <div className="img-list-container">
                                {this.state.form.images.length
                                    ? this.state.form.images.map(
                                          (element, index) => {
                                              return (
                                                  <div className="img-list-wrap">
                                                      <img
                                                          src={element}
                                                          alt={
                                                              element.product_id
                                                          }
                                                      />
                                                      <span className="cross cross-icon">
                                                          <span
                                                              onClick={() =>
                                                                  this.removeProductImage(
                                                                      index
                                                                  )
                                                              }
                                                          >
                                                              X
                                                          </span>
                                                      </span>
                                                  </div>
                                              );
                                          }
                                      )
                                    : ""}
                            </div>
                        </Col>
                        <Col sm={12}>
                            <div className="form-group mb-4">
                                <label htmlFor="Product Description">
                                    Product Description
                                </label>
                                <textarea
                                    onChange={this.handleChange}
                                    value={this.state.form.description}
                                    name="description"
                                    id="description"
                                    className="form-control"
                                    rows="5"
                                ></textarea>
                            </div>
                        </Col>
                        <Col lg={12} className="profile-cancel-col">
                            <label className="mb-4">
                                Product Variation
                                <button
                                    type="button"
                                    onClick={() => this.addFormFields()}
                                    className="btn btn-primary ml-2"
                                >
                                    Add
                                </button>
                            </label>
                            {this.state.variations.map((element, index) => {
                                return (
                                    <div
                                        className="row align-items-center"
                                        key={index}
                                    >
                                        <div className="col-12 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <InputSelectField
                                                    name="color"
                                                    placeholder="color"
                                                    option={color}
                                                    index={index}
                                                    onChange={(options, e) =>
                                                        this.handleColorChange(
                                                            e,
                                                            options,
                                                            index
                                                        )
                                                    }
                                                    value={element.color}
                                                    schema={ProductValidation}
                                                    error={this.state.error}
                                                    isMulti={false}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <InputSelectField
                                                    name="size"
                                                    placeholder="size"
                                                    option={size}
                                                    index={index}
                                                    onChange={(options, e) =>
                                                        this.handleSizeChange(
                                                            e,
                                                            options,
                                                            index
                                                        )
                                                    }
                                                    value={element.size}
                                                    schema={ProductValidation}
                                                    error={this.state.error}
                                                    isMulti={false}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input
                                                    value={element.cost || ""}
                                                    type="number"
                                                    name="cost"
                                                    id="cost"
                                                    className="form-control"
                                                    data-index={index}
                                                    onChange={
                                                        this
                                                            .handleVariationChange
                                                    }
                                                    placeholder="Enter Price"
                                                    maxLength="8"
                                                    onInput={
                                                        this.maxLengthCheck
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input
                                                    value={
                                                        element.quantity || ""
                                                    }
                                                    type="number"
                                                    name="quantity"
                                                    id="quantity"
                                                    className="form-control"
                                                    data-index={index}
                                                    onChange={
                                                        this
                                                            .handleVariationChange
                                                    }
                                                    maxLength="8"
                                                    onInput={
                                                        this.maxLengthCheck
                                                    }
                                                    placeholder="Enter Quantity"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <div className="multi-upload-file">
                                                    <input
                                                        type="file"
                                                        name="pro_files"
                                                        id="pro_files"
                                                        multiple
                                                        data-index={index}
                                                        onChange={
                                                            this
                                                                .setSelectedProductFilesForVar
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <button
                                                    type="button"
                                                    className="btn btn-danger btn-block"
                                                    onClick={() =>
                                                        this.removeFormFields(
                                                            index
                                                        )
                                                    }
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                        <Col sm={12} className="mb-3">
                                            <div className="img-list-container">
                                                {element.images.length
                                                    ? element.images.map(
                                                          (image, i) => {
                                                              return (
                                                                  <div className="img-list-wrap">
                                                                      <img
                                                                          src={
                                                                              image
                                                                          }
                                                                          alt={
                                                                              index
                                                                          }
                                                                      />
                                                                      <span className="cross cross-icon">
                                                                          <span
                                                                              onClick={() =>
                                                                                  this.removeImage(
                                                                                      i,
                                                                                      index
                                                                                  )
                                                                              }
                                                                          >
                                                                              X
                                                                          </span>
                                                                      </span>
                                                                  </div>
                                                              );
                                                          }
                                                      )
                                                    : ""}
                                            </div>
                                        </Col>
                                    </div>
                                );
                            })}
                        </Col>
                        <Col lg={12} className="profile-cancel-col">
                            <label className="mb-4">
                                Add Custom Field
                                <button
                                    type="button"
                                    onClick={() => this.addFormCustomFields()}
                                    className="btn btn-primary ml-2"
                                >
                                    Add
                                </button>
                            </label>
                            {this.state.custom_field.map((element, index) => {
                                return (
                                    <div
                                        className="row align-items-center"
                                        key={index}
                                    >
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="form-group">
                                                <input
                                                    value={
                                                        element.custom_field_key ||
                                                        ""
                                                    }
                                                    type="text"
                                                    name="custom_field_key"
                                                    id="custom_field_key"
                                                    className="form-control"
                                                    data-index={index}
                                                    onChange={
                                                        this
                                                            .handleCustomFieldChange
                                                    }
                                                    placeholder="Enter Key"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="form-group">
                                                <input
                                                    value={
                                                        element.custom_field_value ||
                                                        ""
                                                    }
                                                    type="text"
                                                    name="custom_field_value"
                                                    id="custom_field_value"
                                                    className="form-control"
                                                    data-index={index}
                                                    onChange={
                                                        this
                                                            .handleCustomFieldChange
                                                    }
                                                    placeholder="Enter Value"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="form-group">
                                                <button
                                                    type="button"
                                                    className="btn btn-danger btn-block"
                                                    onClick={() =>
                                                        this.removeFormCustomFields(
                                                            index
                                                        )
                                                    }
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col sm={12}>
                            <Button
                                type="submit"
                                variant="outline-primary"
                                className={`btn-block ${
                                    this.props.create_loading ||
                                    this.props.update_loading
                                        ? "loading"
                                        : ""
                                }`}
                            >
                                {this.props.submitText}
                            </Button>
                        </Col>
                    </Row>
                </form>

                <Modal
                    show={this.state.show}
                    onHide={() => this.setState({ show: false })}
                    dialogClassName="modal-90w"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Add Category
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div
                            className="form-container domain-form-container"
                            id="registration-form"
                        >
                            <div className="domain-modal-scrollable">
                                <form>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div className="form-group">
                                                <div className="form-group">
                                                    <label htmlFor="Category">
                                                        Category
                                                    </label>
                                                    <input
                                                        value={
                                                            this.state.form.name
                                                        }
                                                        type="text"
                                                        name="name"
                                                        id="name"
                                                        className="form-control"
                                                        onChange={
                                                            this.handleChange
                                                        }
                                                        placeholder="Enter Category"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <InputSelectField
                                                    name="parent_category"
                                                    placeholder="Select Product Category"
                                                    option={catOptions}
                                                    isMulti={false}
                                                    onChange={(options, e) =>
                                                        this.handleMultiSelect(
                                                            e,
                                                            options
                                                        )
                                                    }
                                                    value={
                                                        this.state.form
                                                            .parent_category
                                                    }
                                                    schema={ProductValidation}
                                                    error={this.state.error}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <button
                                                    type="button"
                                                    className={`btn btn-outline-primary btn-block ${
                                                        this.props
                                                            .create_category_loading
                                                            ? "loading"
                                                            : ""
                                                    }`}
                                                    onClick={(e) =>
                                                        this.submitCategory(e)
                                                    }
                                                >
                                                    Create
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tags: state.tags.list.tags.data,
        categories: state.categories.list.categories,
        product: state.products.detail.product,
        colors: state.variations.colorList.colors,
        sizes: state.variations.sizeList.sizes,
        create_category_loading: state.categories.create.loading,
        create_loading: state.products.create.loading,
        update_loading: state.products.update.loading,
    };
};

export default connect(mapStateToProps)(productFormComponent);
