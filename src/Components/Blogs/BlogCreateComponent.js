import React, { Component } from "react";
import { Container } from "react-bootstrap";
// import TemplateMain from "Templates/TemplateMain";
import BlogFormComponent from "Components/Blogs/Forms/BlogFormComponent";
class CreateBlogComponent extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <TemplateMain> */}
                    <h4 className="tx-color-01 mg-b-15">Create New Blog</h4>
                    <div className="content content-components">
                        <div className="container">
                            <Container>
                                <h4 className="tx-color-01 mg-b-15">
                                    Create New Blog
                                </h4>
                                <BlogFormComponent
                                    method="POST"
                                    params={this.props.match.params.id}
                                    submitText="Create"
                                />
                            </Container>
                        </div>
                    </div>
                {/* </TemplateMain> */}
            </React.Fragment>
        );
    }
}

export default CreateBlogComponent;
