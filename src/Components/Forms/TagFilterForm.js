import React, { Component } from "react";
import { Row, Button, Col } from "react-bootstrap";
import AsyncSelectField from "Components/Forms/Fields/AsyncSelectField";
import TagListAction from "Redux/V1/Tags/Get/TagGetAction";
import queryString from "query-string";

class TagFilterForm extends Component {
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
    this.props.dispatch(TagListAction.tagGet(params));
  }
  render() {
    if (!this.props.location) {
      localStorage.removeItem("name");
    }
    const option1 = localStorage.getItem("name");
    const tag_options = JSON.parse(option1);
    return (
      <React.Fragment>
        <form>
          <Row>
            <Col md="6 mt-3">
              <AsyncSelectField
                name="tags"
                dispatch={this.props.dispatch}
                placeholder="Search By Name"
                defaultValue={tag_options}
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

export default TagFilterForm;
