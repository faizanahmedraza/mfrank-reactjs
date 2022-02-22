import React, { Component } from "react";
import { Row, Button, Col } from "react-bootstrap";
import AsyncSelectField from "Components/Forms/Fields/AsyncSelectField";
import BlogListAction from "Redux/V1/Blogs/Get/BlogGetAction";
import queryString from "query-string";
// import InputSelectField from "Components/Forms/Fields/InputSelectField";
// import InputDateField from "Components/Forms/Fields/InputDateField";

class BlogFilterForm extends Component {
  componentDidMount() {
    const query = queryString.parse(this.props.location);
    if (query.from_register_date) {
      query.from_register_date = query.from_register_date.replace(
        " - ",
        "&to_register_date="
      );
    }
    for (const key of Object.keys(query)) {
      if (query[key] === "") {
        delete query[key];
      }
    }
    const params = Object.entries(query)
      .map(([key, value]) => key + "=" + value)
      .join("&");
    this.props.dispatch(BlogListAction.blogGet({
      params: params,
      type: "admin"
    })
    );
  }
  handleSelect = (e, options) => {
    localStorage.setItem(e.name, JSON.stringify(options));
  };
  render() {
    if (!this.props.location) {
      localStorage.removeItem("full_name");
      localStorage.removeItem("status");
      localStorage.removeItem("startDate");
      localStorage.removeItem("endDate");
      localStorage.removeItem("title")
    }
    const option1 = localStorage.getItem("title");
    // const option3 = localStorage.getItem("status");
    const title_options = JSON.parse(option1);
    // const status_options = JSON.parse(option3);
    // const blog_status = [
    //   { value: "1", label: "Active" },
    //   { value: "0", label: "Pending" },
    //   { value: "2", label: "Blocked" },
    // ];

    return (
      <React.Fragment>
        <form>
          <Row>
            <Col md="6 mt-3">
              <AsyncSelectField
                name="posts"
                dispatch={this.props.dispatch}
                placeholder="Search By Title"
                defaultValue={title_options}
              />
            </Col>
            <Col md="6 mt-3">
              <Button type="submit" className="btn btn-brand-02 btn-block">
                Search
              </Button>
            </Col>
          </Row>
        </form>
      </React.Fragment>
    );
  }
}

export default BlogFilterForm;
