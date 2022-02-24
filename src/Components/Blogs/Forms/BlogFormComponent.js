import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import InputUpdateField from "Components/Forms/Fields/InputUpdateField";
import InputSelectField from "Components/Forms/Fields/InputSelectField";
import productCreateAction from "Redux/V1/Products/Post/ProductPostAction";
import TagListAction from 'Redux/V1/Tags/Get/TagGetAction';
import CategoryListAction from 'Redux/V1/Categories/Get/CategoryGetAction';
// import PermissionListAction from "Redux/V1/Permissions/Get/PermissionGetAction";
// import TagListAction from 'Redux/V1/Tags/Get/TagGetAction';
import productDetailAction from "Redux/V1/Products/First/ProductFirstAction";
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
            {
                color: '',
                size: '',
                images: [],
            }
        ]
    };
    componentDidMount() {
        this.props.dispatch(TagListAction.tagGet());
        this.props.dispatch(CategoryListAction.categoryGet());
        if (this.props.method === "PUT")
            this.props.dispatch(productDetailAction.productFirst(this.props.params));
    }
    handleColorChange = (e) => {
        const index = e.target.dataset.index
        let variations = [...this.state.variations];
        variations[index].color = e.target.value;
        this.setState({
            variations
        });
    }
    handleSizeChange = (e) => {
        const index = e.target.dataset.index
        let variations = [...this.state.variations];
        variations[index].size = e.target.value
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
        console.log("Data ==>", this.state);
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

                    variations = this.props.product.product_variation.map((cat) => {
                        return { color: cat.color, size: cat.size, images: cat.images };
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
        // const permissionOptions = this.props.permissions.map(function (
        //     permission
        // ) {
        //     return { value: permission.id, label: permission.name };
        // });
        const tagsOptions = this.props.tags.map(function (tag) {
            return { value: tag.id, label: tag.name };
        });
        const catOptions = this.props.categories.map(function (category) {
            return { value: category.id, label: category.name };
        });
        // const catOptions = [
        //     {
        //         value: "Cat 1",
        //         label: "Cat 1"
        //     },
        //     {
        //         value: "Cat 2",
        //         label: "Cat 2",
        //     },
        // ];
        // const tagsOptions = [
        //     {
        //         value: "Tag 1",
        //         label: "Tag 1"
        //     },
        //     {
        //         value: "Tag 2",
        //         label: "Tag 2",
        //     },
        // ];
        // const tagsOptions = this.props.tags.map(function (tag) {
        //     return { value: tag.id, label: tag.name };
        // });
        const status = [
            { value: "active", label: "Active" },
            { value: "In Active", label: "In Active" },
        ];
        console.log(this.props.product);
        this.setDefaultData();
        return (
            <React.Fragment>
                <form method={this.props.method} onSubmit={this.handleFormSubmit}>
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
                                console.log(element);
                                // let imgArray = element.images.length ? element.images.split(",") : [];
                                return (
                                    <div className="row align-items-center" key={index}>
                                        <div className="col-12 col-md-4 col-lg-3">
                                            <div className="form-group" >
                                                <input
                                                    value={element.color || ""}
                                                    type="text"
                                                    name="pro_color"
                                                    id="pro_color"
                                                    className="form-control"
                                                    onChange={this.handleColorChange}
                                                    data-index={index}
                                                    placeholder="Enter Color" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 col-lg-3">
                                            <div className="form-group">
                                                <input
                                                    value={element.size || ""}
                                                    type="text"
                                                    name="pro_size"
                                                    id="pro_size"
                                                    className="form-control"
                                                    data-index={index}
                                                    onChange={this.handleSizeChange}
                                                    placeholder="Enter Size" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 col-lg-3">
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
                                        <div className="col-12 col-md-4 col-lg-3">
                                            <div className="form-group">
                                                {
                                                    index ?
                                                        <button type="button" className="btn btn-danger" onClick={() => this.removeFormFields(index)}>Remove</button>
                                                        : null
                                                }
                                            </div>
                                        </div>
                                        <Col sm={12} className="mb-3">
                                            {/* {
                                              (imgArray.length) ?
                                              imgArray.map((image, index) => {
                                                  return (
                                                      <img src={image} alt={index} style={{ width: "80px" }} />
                                                  )
                                              }) : ""
                                            } */}
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
                                className={`btn-block`}
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
    console.log(state.products.detail.product.product_images);
    return {
        tags: state.tags.list.tags,
        categories: state.categories.list.categories,
        product: state.products.detail.product
    };
};

export default connect(mapStateToProps)(productFormComponent);
