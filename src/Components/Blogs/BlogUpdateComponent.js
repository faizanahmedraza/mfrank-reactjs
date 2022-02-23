import React, { Component } from "react";
import { Container } from "react-bootstrap";
// import TemplateMain from "Templates/TemplateMain";
import BlogFormComponent from "Components/Blogs/Forms/BlogFormComponent";

class BlogUpdateComponent extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <TemplateMain> */}
                    <div className="content content-components">
                        <div className="container">
                            <Container>
                                <h4 className="tx-color-01 mg-b-15">
                                    Update Product
                                </h4>
                                <BlogFormComponent
                                    method="PUT"
                                    params={this.props.match.params.id}
                                    submitText="Update"
                                />
                            </Container>
                        </div>
                    </div>
                {/* </TemplateMain> */}
            </React.Fragment>
        );
    }
}

export default BlogUpdateComponent;
