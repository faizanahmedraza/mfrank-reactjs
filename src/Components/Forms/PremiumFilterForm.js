import React, { Component } from "react";
import { Row, Button, Col } from "react-bootstrap";
import AsyncSelectField from "Components/Forms/Fields/AsyncSelectField";
import PremiumListAction from "Redux/V1/Premiums/Get/PremiumGetAction";
import queryString from "query-string";
import InputSelectField from "Components/Forms/Fields/InputSelectField";
// import AsyncSelectField2 from "Components/Forms/Fields/AsyncSelectField2";

class PremiumFilterForm extends Component {
    componentDidMount() {
        const query = queryString.parse(this.props.location);
        if (query.date_from) {
            query.date_from = query.date_from.replace(" - ", "&date_to=");
        }
        for (const key of Object.keys(query)) {
            if (query[key] === "") {
                delete query[key];
            }
        }
        const params = Object.entries(query)
            .map(([key, value]) => key + "=" + value)
            .join("&");
        this.props.dispatch(PremiumListAction.premiumGet(params));
    }
    handleSelect = (e, options) => {
        localStorage.setItem(e.name, JSON.stringify(options));
    };
    render() {
        if (!this.props.location) {
            localStorage.removeItem("types");
            localStorage.removeItem("slugs");
            localStorage.removeItem("names");
            localStorage.removeItem("authors");
        }
        const option1 = localStorage.getItem("types");
        const option2 = localStorage.getItem("slugs");
        const option3 = localStorage.getItem("names");
        const option4 = localStorage.getItem("authors");
        const type_options = JSON.parse(option1);
        const slug_options = JSON.parse(option2);
        const name_options = JSON.parse(option3);
        const author_options = JSON.parse(option4);
        const type = [
            { value: "core", label: "Core" },
            { value: "theme", label: "Theme" },
            { value: "plugin", label: "Plugin" },
        ];

        return (
            <React.Fragment>
                <form>
                    <Row>
                        <Col md="6 mt-3">
                            <AsyncSelectField
                                name="names"
                                dispatch={this.props.dispatch}
                                placeholder="Search By Name"
                                defaultValue={name_options}
                                dupName="names"
                            />
                        </Col>
                        <Col md="6 mt-3">
                            <AsyncSelectField
                                name="slugs"
                                dispatch={this.props.dispatch}
                                placeholder="Search By Slug"
                                defaultValue={slug_options}
                                dupName="slugs"
                            />
                        </Col>
                        <Col md="6 mt-3">
                            <InputSelectField
                                isMulti
                                name="types"
                                option={type}
                                placeholder="Search By Type"
                                onChange={(options, e) =>
                                    this.handleSelect(e, options)
                                }
                                defaultValue={type_options}
                                isClearable
                                delimiter=","
                            />
                        </Col>
                        <Col md="6 mt-3">
                            <AsyncSelectField
                                name="authors"
                                dispatch={this.props.dispatch}
                                placeholder="Search By Authors"
                                defaultValue={author_options}
                                dupName="authors"
                            />
                        </Col>
                        <Col md="6 mt-3">
                            <Button
                                type="submit"
                                className="btn btn-brand-02 btn-block"
                            >
                                Search
                            </Button>
                        </Col>
                    </Row>
                </form>
            </React.Fragment>
        );
    }
}

export default PremiumFilterForm;
