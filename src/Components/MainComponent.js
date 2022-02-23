import React, { Component } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CreateBlogComponent from "Components/Blogs/BlogCreateComponent";
import BlogListComponent from "Components/Blogs/BlogListComponent";
// import BlogSingleComponent from "Components/Blogs/BlogSingleComponent";
import BlogUpdateComponent from "Components/Blogs/BlogUpdateComponent";
// import MainComponent from "Components/Public/MainComponent";
import Component404 from "Components/404/Error404Component";
class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={BlogListComponent} />
                    <Route
                        exact
                        path="/add"
                        component={CreateBlogComponent}
                    />
                    {/* <Route exact path="/posts" component={BlogListComponent} /> */}
                    {/* <Route
                        exact
                        path="/:id"
                        component={BlogSingleComponent}
                    /> */}
                    <Route
                        exact
                        path="/edit/:id"
                        component={BlogUpdateComponent}
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
