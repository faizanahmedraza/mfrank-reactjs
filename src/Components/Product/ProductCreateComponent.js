import React, { Component } from "react";
import { Container } from "react-bootstrap";
import ProductFormComponent from "Components/Product/Forms/ProductFormComponent";
class CreateProductComponent extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <TemplateMain> */}
                    <div className="content content-components">
                        <div className="container">
                            <Container>
                                <h4 className="tx-color-01 mg-b-15">
                                    Create New Product
                                </h4>
                                <ProductFormComponent
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

export default CreateProductComponent;
