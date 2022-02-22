import React, { Component } from "react";
import { Row, Col, Badge } from "react-bootstrap";
import { connect } from "react-redux";
import BlogFirstAction from "Redux/V1/Blogs/First/BlogFirstAction";
import TemplateMain from "Templates/TemplateMain";
import "Assets/css/blogs.css";

class UpdateBlogComponent extends Component {
    state = {
        id: "",
    };

    componentDidMount() {
        this.props.dispatch(
            BlogFirstAction.blogFirst(this.props.match.params.id)
        );
    }

    render() {
        const blogTag = this.props.blog.tags;
        // const blogPermission = this.props.blog.permissions;
        let tagData;
        if (blogTag) {
            tagData = blogTag.map((tag) => {
                return (
                    <React.Fragment>
                        <Badge variant="primary">{tag.name}</Badge>{" "}
                    </React.Fragment>
                );
            });
        }
        // if (blogPermission) {
        //     permissionData = blogPermission.map((permissions) => {
        //         return (
        //             <React.Fragment>
        //                 <Badge variant="primary">{permissions.name}</Badge>{" "}
        //             </React.Fragment>
        //         );
        //     });
        // }
        return (
            <React.Fragment>
                <TemplateMain>
                    <div className="content content-components">
                        <div className="container">
                            <h4 className="tx-color-01 mg-b-15">
                                Blog Details
                            </h4>
                            <Row>
                                <Col sm={12} className="form-group">
                                    <label>Image</label>
                                    <div>
                                        <img
                                            width="400px"
                                            src={this.props.blog.image}
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
                                        value={this.props.blog.title}
                                    />
                                </Col>
                                <Col sm={6} className="form-group">
                                    <label>Description</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your description"
                                        value={this.props.blog.description}
                                    />
                                </Col>
                                <Col sm={6} className="form-group">
                                    <label>Link</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your Link"
                                        value={this.props.blog.link}
                                    />
                                </Col>
                                <Col sm={6} className="form-group">
                                    <label>Status</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your Status"
                                        value={this.props.blog.status}
                                    />
                                </Col>
                                <Col sm={6} className="form-group">
                                    <label>Tags</label>
                                    <div>{tagData}</div>
                                </Col>

                                <Col sm={12}>
                                    <a
                                        href={
                                            "/blogs/edit/" + this.props.blog.id
                                        }
                                        className="btn btn-primary"
                                    >
                                        Edit Blog
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
        blog: state.blogs.detail.blog,
    };
};

export default connect(mapStateToProps)(UpdateBlogComponent);
