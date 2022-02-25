import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import InputUpdateField from "Components/Forms/Fields/InputUpdateField";
import InputSelectField from "Components/Forms/Fields/InputSelectField";
import productCreateAction from "Redux/V1/Products/Post/ProductPostAction";
import TagListAction from 'Redux/V1/Tags/Get/TagGetAction';
import ColorListAction from 'Redux/V1/Variation/Color/Get/ColorGetAction';
import SizeListAction from 'Redux/V1/Variation/Size/Get/SizeGetAction';
import CategoryListAction from 'Redux/V1/Categories/Get/CategoryGetAction';
// import PermissionListAction from "Redux/V1/Permissions/Get/PermissionGetAction";
// import TagListAction from 'Redux/V1/Tags/Get/TagGetAction';
import ProductDetailAction from "Redux/V1/Products/First/ProductFirstAction";
import productUpdateAction from "Redux/V1/Products/Put/ProductPutAction";
import ProductValidation from "Validations/ProductValidation";
import ErrorBusiness from "Businesses/ErrorBusiness";
// import UploadPhotoField from "Components/Forms/Fields/UploadPhotoField";

class productFormComponent extends Component {
    state = {
        form: {
            title: null,
            categories: [],
            tags: [],
            price: null,
            status: null,
            description: null,
            images: [],
        },
        default_data: false,
        variations: [
        ]
    };
    componentDidMount() {
        this.props.dispatch(TagListAction.tagGet());
        this.props.dispatch(ColorListAction.colorGet());
        this.props.dispatch(SizeListAction.sizeGet());
        this.props.dispatch(CategoryListAction.categoryGet());
        if (this.props.method === "PUT")
            this.props.dispatch(ProductDetailAction.productFirst(this.props.params));
    }
    handleColorChange = (e, options, index) => {
        // const index = e.target // .dataset.index
        // console.log(options);
        // console.log(index);
        // const index = index
        let variations = [...this.state.variations];
        variations[index].color = options;
        console.log(variations)
        this.setState({
            variations
        });
    }
        handleSizeChange = (e, options, index) => {
        // const index = e.target // .dataset.index
        // console.log(options);
        // console.log(index);
        // const index = index
        let variations = [...this.state.variations];
        variations[index].size = options;
        console.log(variations)
        this.setState({
            variations
        });
    }
    handleVariationChange = (e) => {
        const index = e.target.dataset.index
        let variations = [...this.state.variations];
        variations[index][e.target.name] = e.target.value
        console.log(variations)
        this.setState({
            variations
        });
    }
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
            variations
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
            const newImagesPromises = []
            for (let i = 0; i < e.target.files.length; i++) {
                newImagesPromises.push(this.toBase64(e.target.files[i]))
            }
            const newImages = await Promise.all(newImagesPromises);
            let { form } = this.state;
            this.setState({
                form: {
                    ...form,
                    images: [...this.state.form.images, ...newImages]
                }
            })
        }
    }

    setSelectedProductFilesForVar = async (e) => {
        const index = e.target.dataset.index;
        let newImages = [];
        if (e.target.files && e.target.files.length > 0) {
            const newImagesPromises = [];
            for (let i = 0; i < e.target.files.length; i++) {
                newImagesPromises.push(this.toBase64(e.target.files[i]))
            }
            newImages = await Promise.all(newImagesPromises);
        }
        let variations = [...this.state.variations];
        variations[index].images = [...newImages];
        this.setState({ variations })
    }

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
        // console.log("Data ==>", this.state);
        if (this.props.method === 'PUT') {
            let { form } = this.state;
            form['variations'] = this.state.variations;
            this.props.dispatch(
                productUpdateAction.productPut({
                    form: this.state.form,
                    id: this.props.params,
                })
            );
        }
        if (this.props.method === 'POST') {
            let { form } = this.state;
            form['variations'] = this.state.variations;
            console.log(form)
            ProductValidation.validate(this.state.form, { abortEarly: false })
                .then(() => {
                    this.props.dispatch(
                        productCreateAction.productPost(this.state.form)
                    );
                }).catch((err) => {
                    this.setState({
                        error: ErrorBusiness.errorGet(err),
                    });
                });
        }
    }

    setDefaultData = () => {
        if (this.props.method === "PUT") {
            let { form, default_data, variations } = this.state;

            if (default_data === false) {
                setTimeout(() => {
                    form.title = this.props.product.title;
                    form.description = this.props.product.description;
                    form.price = this.props.product.price;
                    // form.link = this.props.product.link;
                    // form.image = this.props.product.image;
                    form.status = {
                        value: this.props.product.status ? "Active" : "In Active",
                        label: this.props.product.status ? "Active" : "In Active",
                    };
                    form.description = this.props.product.description
                    // form.status = {
                    //     value: this.props.product.status,
                    //     label: this.props.product.status,
                    // }
                    form.categories = this.props.product.product_categories.map((cat) => {
                        return { value: cat.id, label: cat.name };
                    });

                    form.tags = this.props.product.product_tags.map((tag) => {
                        return { value: tag.id, label: tag.name };
                    });

                    variations = this.props.product.product_variations.map((data) => {
                        return (
                            {
                                color: {
                                    value: data.color.id,
                                    label: data.color.name
                                },
                                size: {
                                    value: data.size.id,
                                    label: data.size.name
                                },
                                images: data.images,
                                cost: data.cost,
                                quantity: data.quantity
                            }
                        )
                    });

                    this.setState({
                        form,
                        default_data: true,
                        variations
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
        this.setState(({
            variations: [...this.state.variations, { color: "", size: "", images: [] }]
        }))
    }
    removeFormFields(i) {
        let formValues = this.state.variations;
        formValues.splice(i, 1);
        this.setState({ formValues });
    }

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
        // console.log(this.props.product);
        this.setDefaultData();
        return (
            <React.Fragment>
                <form method={this.props.method} onSubmit={this.handleFormSubmit}>
                    {console.log(this.state, "state value")}
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
                            <label>Select Product Category</label>
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
                            <InputUpdateField
                                name="price"
                                placeholder="Product Price"
                                onChange={this.handleChange}
                                defaultValue={this.state.form.price}
                                schema={ProductValidation}
                                error={this.state.error}
                            />
                        </Col>
                        <Col sm={6}>
                            <label htmlFor="Product Image">Product Image</label>
                            <div className="multi-upload-file">
                                <input type="file" multiple onChange={this.setSelectedProductFiles} />
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
                            {
                                (this.props.product.product_images.length) ?
                                    this.props.product.product_images.map((element, index) => {
                                        return (
                                            <img src={element.image} alt={element.product_id} style={{ width: "100px" }} />
                                        )
                                    }) : ""
                            }
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
                                    rows="5"></textarea>
                            </div>
                        </Col>
                        <Col lg={12} className="profile-cancel-col">
                            <label className="mb-4">
                                Product Variation
                                <button
                                    type="button"
                                    onClick={() => this.addFormFields()}
                                    className="btn btn-primary ml-2">Add</button>
                            </label>
                            {this.state.variations.map((element, index) => {
                                return (
                                    <div className="row align-items-center" key={index}>
                                        <div className="col-12 col-md-6 col-lg-6">
                                            <div className="form-group" >
                                                <InputSelectField
                                                    name="color"
                                                    placeholder="color"
                                                    option={color}
                                                    index={index}
                                                    onChange={(options, e) =>
                                                        this.handleColorChange(e, options,index)
                                                    }
                                                    value={element.color}
                                                    schema={ProductValidation}
                                                    error={this.state.error}
                                                    isMulti={false}
                                                />
                                                {/* <input
                                                    value={element.color || ""}
                                                    type="text"
                                                    name="pro_color"
                                                    id="pro_color"
                                                    className="form-control"
                                                    onChange={this.handleColorChange}
                                                    data-index={index}
                                                    placeholder="Enter Color" /> */}
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
                                                        this.handleSizeChange(e, options, index)
                                                    }
                                                    value={element.size}
                                                    schema={ProductValidation}
                                                    error={this.state.error}
                                                    isMulti={false}
                                                />
                                                {/* <input
                                                    value={element.size || ""}
                                                    type="text"
                                                    name="pro_size"
                                                    id="pro_size"
                                                    className="form-control"
                                                    data-index={index}
                                                    onChange={this.handleSizeChange}
                                                    placeholder="Enter Size" /> */}
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input
                                                value={element.cost || ""}
                                                type="text"
                                                name="cost"
                                                id="cost"
                                                className="form-control"
                                                data-index={index}
                                                onChange={this.handleVariationChange}
                                                placeholder="Enter Price" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input
                                                value={element.quantity || ""}
                                                type="text"
                                                name="quantity"
                                                id="quantity"
                                                className="form-control"
                                                data-index={index}
                                                onChange={this.handleVariationChange}
                                                placeholder="Enter Quantity" />
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
                                                        onChange={this.setSelectedProductFilesForVar} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <button type="button" className="btn btn-danger btn-block" onClick={() => this.removeFormFields(index)}>Remove</button>
                                            </div>
                                        </div>
                                        <Col sm={12} className="mb-3">
                                            {
                                              (element.images.length) ?
                                              element.images.map((image, index) => {
                                                  return (
                                                      <img src={image} alt={index} style={{ width: "80px" }} />
                                                  )
                                              }) : ""
                                            }
                                        </Col>
                                    </div>
                                )
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
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        tags: state.tags.list.tags,
        categories: state.categories.list.categories,
        product: state.products.detail.product,
        colors: state.variations.colorList.colors,
        sizes: state.variations.sizeList.sizes,
        create_loading: state.products.create.loading,
        update_loading: state.products.update.loading,
    };
};

export default connect(mapStateToProps)(productFormComponent);
