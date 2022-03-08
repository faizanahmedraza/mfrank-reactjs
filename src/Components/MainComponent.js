import React, { Component } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CreateProductComponent from "Components/Product/ProductCreateComponent";
import ProductListComponent from "Components/Product/ProductListComponent";
import ProductSingleComponent from "Components/Product/ProductSingleComponent";
import ProductUpdateComponent from "Components/Product/ProductUpdateComponent";
import Component404 from "Components/404/Error404Component";
class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={ProductListComponent} />
                    <Route
                        exact
                        path="/add"
                        component={CreateProductComponent}
                    />

                    <Route
                        exact
                        path="/:id"
                        component={ProductSingleComponent}
                    />
                    <Route
                        exact
                        path="/edit/:id"
                        component={ProductUpdateComponent}
                    />
                    <Route exact path="/404" component={Component404} />
                    <Redirect to="/404" />
                </Switch>
                <ToastContainer />
            </React.Fragment>
        );
    }
}

export default Main;
