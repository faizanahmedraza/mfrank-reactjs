import React from "react";
import AsyncSelect from "react-select/async";
import BlogService from "Services/V1/BlogService";

class AsyncSelectField extends React.Component {
    state = {
        form: {
            groups: [],
            users: [],
            tags: [],
            blogs: [],
        },
        default_value: this.props.defaultValue,
    };

    loadOptions = async (input, callback) => {
        const data = await this.smartSearchFilter(input);
        const result = data.map((d) => {
            if (this.props.name === "groups") {
                return {
                    value: `${d.id}`,
                    label: `${d.value}`,
                };
            } else {
                return {
                    value: `${d.id}`,
                    label: `${d.value}`,
                };
            }
        });
        callback(result);
    };

    smartSearchFilter = async (value) => {
        if (value.length > 2 && value.trim()) {
            if (this.props.name === "posts") {
                const response = await BlogService.blogSearch({
                    field: "title",
                    value: value,
                });

                return response.data.search_result;
            }
        }
    };
    handleMultiSelect = (e, options) => {
        if (this.props.onChange) this.props.onChange(e, options);
        let { form } = this.state;
        form[e.name] = options;
        this.setState({
            form,
        });
        if (e.name === "groups") {
            localStorage.setItem(
                "groups",
                JSON.stringify(this.state.form.groups)
            );
        }

        if (e.name === "names" && this.props.dupName === "names") {
            localStorage.setItem(
                "names",
                JSON.stringify(this.state.form.names)
            );
        }

        if (e.name === "users") {
            localStorage.setItem(
                "full_name",
                JSON.stringify(this.state.form.users)
            );
        }
        if (e.name === "posts") {
            localStorage.setItem(
                "title",
                JSON.stringify(this.state.form.posts)
            );
        }
        if (e.name === "tags") {
            localStorage.setItem("name", JSON.stringify(this.state.form.tags));
        }
    };

    render() {
        return (
            <React.Fragment>
                <div>
                    {/* <label>{this.props.title}</label> */}
                    <AsyncSelect
                        className={this.props.className}
                        isMulti={this.props.isMulti === false ? false : true}
                        cacheOptions
                        delimiter=","
                        loadOptions={this.loadOptions}
                        placeholder={this.props.placeholder}
                        name={this.props.name}
                        defaultValue={this.state.default_value}
                        onChange={(options, e) =>
                            this.handleMultiSelect(e, options)
                        }
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default AsyncSelectField;
