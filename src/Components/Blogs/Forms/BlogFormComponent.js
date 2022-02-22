import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import InputUpdateField from "Components/Forms/Fields/InputUpdateField";
import InputSelectField from "Components/Forms/Fields/InputSelectField";
import BlogCreateAction from "Redux/V1/Blogs/Post/BlogPostAction";
// import PermissionListAction from "Redux/V1/Permissions/Get/PermissionGetAction";
// import TagListAction from 'Redux/V1/Tags/Get/TagGetAction';
import BlogDetailAction from "Redux/V1/Blogs/First/BlogFirstAction";
import BlogUpdateAction from "Redux/V1/Blogs/Put/BlogPutAction";
import BlogValidation from "Validations/BlogValidation";
import ErrorBusiness from "Businesses/ErrorBusiness";
import UploadPhotoField from "Components/Forms/Fields/UploadPhotoField";
let current_image = false;
class BlogFormComponent extends Component {
    state = {
        form: {
            product_title: null,
            product_category: [],
            product_tags: [],
            product_price: null,
            product_description: null,
        },
        default_data: false,
        product_files: [],
        // variation_files: [],
        product_variation: [
            {   
                color: '',
                size: '',
                files: [],
            }
        ]
    };
    componentDidMount() {
        // this.props.dispatch(PermissionListAction.permissionGet());
        // this.props.dispatch(TagListAction.tagGet("pagination=false"));
        if (this.props.method === "PUT")
            this.props.dispatch(BlogDetailAction.blogFirst(this.props.params));
    }
    handleColorChange = (e) => {
        const index = e.target.dataset.index
        let product_variation = [...this.state.product_variation];
        product_variation[index].color = e.target.value
        this.setState({
            product_variation
        });
    }
    handleSizeChange = (e) => {
        const index = e.target.dataset.index
        let product_variation = [...this.state.product_variation];
        product_variation[index].size = e.target.value
        this.setState({
            product_variation
        });
    }
    handleChange = (e) => {
        const index = e.target.dataset.index
        let product_variation = [...this.state.product_variation];

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
            product_variation
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

    setSelectedFile = async (e) => {
        const value = {
            name: e.target.files[0].name,
            type: e.target.files[0].type,
            size: e.target.files[0].size,
        };
        const formImage = await this.toBase64(e.target.files[0]);
        let { form } = this.state;
        current_image = true;
        this.setState({
            error_clear: false,
            form: {
                ...form,
                image_value: value,
                image: formImage,
            },
        });
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
        // let { form, product_variation } = this.state;
        console.log("Data ==>", this.state);
    }
    handleSubmit = (e) => {
        if (this.props.method === "PUT") {
            e.preventDefault();
            let { form } = this.state;
            if (current_image === false) {
                let img = form.image;
                form.image = null;
                this.props.dispatch(
                    BlogUpdateAction.blogPut({
                        form: this.state.form,
                        id: this.props.params,
                    })
                );
                form.image = img;
            } else {
                this.props.dispatch(
                    BlogUpdateAction.blogPut({
                        form: this.state.form,
                        id: this.props.params,
                    })
                );
            }
        }
        if (this.props.method === "POST") {
            e.preventDefault();
            BlogValidation.validate(this.state.form, { abortEarly: false })
                .then(() => {
                    this.props.dispatch(
                        BlogCreateAction.blogPost(this.state.form)
                    );
                })
                .catch((err) => {
                    this.setState({
                        error: ErrorBusiness.errorGet(err),
                    });
                });
        }
    };

    fileSelectedHandler = (e) => {
        this.setState({ files: [...this.state.product_files, ...e.target.files] })
    }
    fileSelectedHandlerForVar = (e) => {
        
        const index = e.target.dataset.index
        let product_variation = [...this.state.product_variation];
        product_variation[index].files = e.target.files;
        this.setState({product_variation})
    
    }

    setDefaultData = () => {
        if (this.props.method === "PUT") {
            const { form, default_data } = this.state;

            if (default_data === false) {
                setTimeout(() => {
                    form.title = this.props.blog.title;
                    form.description = this.props.blog.description;
                    form.link = this.props.blog.link;
                    form.image = this.props.blog.image;
                    form.status = {
                        value: this.props.blog.status,
                        label: this.props.blog.status,
                    };
                    form.tags = this.props.blog.tags.map((tag) => {
                        return { value: tag.id, label: tag.name };
                    });

                    this.setState({
                        form,
                        default_data: this.props.blog_fetched,
                    });
                }, 100);
            }
        }
    };

    handleCloneChange(i, e) {
        let formValues = this.state.product_variation;
        formValues[i][e.target.name] = e.target.value;
        this.setState({ formValues });
    }
    addFormFields() {
        this.setState(({
            product_variation: [...this.state.product_variation, { color: "", size: "", files: [] }]
        }))
    }
    removeFormFields(i) {
        let formValues = this.state.product_variation;
        formValues.splice(i, 1);
        this.setState({ formValues });
    }

    render() {
        // const permissionOptions = this.props.permissions.map(function (
        //     permission
        // ) {
        //     return { value: permission.id, label: permission.name };
        // });
        const catOptions = [
            { 
                value: "Cat 1", 
                label: "Cat 1" 
            },
            {
                value: "Cat 2",
                label: "Cat 2",
            },
        ];
        const tagsOptions = [
            { 
                value: "Tag 1", 
                label: "Tag 1" 
            },
            {
                value: "Tag 2",
                label: "Tag 2",
            },
        ];
        // const tagsOptions = this.props.tags.map(function (tag) {
        //     return { value: tag.id, label: tag.name };
        // });
        const status = [
            { value: "active", label: "Active" },
            { value: "In Active", label: "In Active" },
        ];
        this.setDefaultData();
        return (
            <React.Fragment>
                <form method={this.props.method} onSubmit={this.handleFormSubmit}>
                    <Row>
                        <Col sm={6}>
                            <InputUpdateField
                                name="product_title"
                                placeholder="Product Title"
                                onChange={this.handleChange}
                                defaultValue={this.state.form.product_title}
                                // schema={BlogValidation}
                                error={this.state.error}
                            />
                        </Col>
                        <Col sm={6}>
                            <label>Select Product Category</label>
                            <InputSelectField
                                name="product_category"
                                placeholder="Select Product Category"
                                option={catOptions}
                                onChange={(options, e) =>
                                    this.handleMultiSelect(e, options)
                                }
                                value={this.state.form.product_category}
                                schema={BlogValidation}
                                error={this.state.error}
                            />
                        </Col>
                        <Col sm={6}>
                            <label>Select Product Tag</label>
                            <InputSelectField
                                name="product_tags"
                                placeholder="Select Product Tag"
                                option={tagsOptions}
                                onChange={(options, e) =>
                                    this.handleMultiSelect(e, options)
                                }
                                value={this.state.form.product_tags}
                                schema={BlogValidation}
                                error={this.state.error}
                            />
                        </Col>
                        <Col sm={6}>
                            <InputUpdateField
                                name="product_price"
                                placeholder="Product Price"
                                onChange={this.handleChange}
                                defaultValue={this.state.form.product_price}
                                // schema={BlogValidation}
                                error={this.state.error}
                            />
                        </Col>
                        <Col sm={6}>
                            <label htmlFor="Product Image">Product Image</label>
                            <div className="multi-upload-file">
                                <input type="file" multiple onChange={this.fileSelectedHandler}/>
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
                                schema={BlogValidation}
                                error={this.state.error}
                                isMulti={false}
                            />
                        </Col>
                        <Col sm={12}>
                            <div className="form-group mb-4">
                                <label htmlFor="Product Description">
                                    Product Description
                                </label>
                                <textarea 
                                    onChange={this.handleChange}
                                    value={this.state.form.product_description}
                                    name="product_description" 
                                    id="product_description"
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
                            {this.state.product_variation.map((element, index) => {
                                console.log("Index", index);
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
                                                        onChange={this.fileSelectedHandlerForVar}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 col-lg-3">
                                            <div className="form-group">
                                                {
                                                    index ? 
                                                    <button type="button"  className="btn btn-danger" onClick={() => this.removeFormFields(index)}>Remove</button> 
                                                    : null
                                                }
                                            </div>
                                        </div>
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
    return {
        // blog: state.blogs.detail.blog,
        // blog_fetched: state.blogs.detail.fetched,
        // tag_fetched: state.tags.detail.fetched,
        // permissions: state.permissions.permissions,
        // tags: state.tags.list.tags,
        // blog_create: state.blogs.create,
        // blog_update: state.blogs.update,
    };
};

export default connect(mapStateToProps)(BlogFormComponent);
