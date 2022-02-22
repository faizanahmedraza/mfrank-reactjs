import React from "react";
import AsyncSelect from "react-select/async";
import DomainListAction from "Redux/V1/Sites/Domain/Get/DomainGetAction";
import DomainService from "Services/V1/DomainService";

class AsyncSelectField2 extends React.Component {
    state = {
        form: {
            domains: null,
        },
        default_value:
            this.props.defaultValue === null ? [] : this.props.defaultValue,
        paste_value: "",
    };
    loadOptions = async (input, callback) => {
        const data = await this.smartSearchFilter(input);
        const result = data.map((d) => {
            return {
                value: `${d.value}`,
                label: `${d.value}`,
            };
        });
        callback(result);
    };

    smartSearchFilter = async (value) => {
        if (value.length > 2 && value.trim()) {
            if (this.props.name === "domains") {
                this.props.dispatch(
                    DomainListAction.domainGet({
                        field: this.props.name,
                        value: value,
                    })
                );
                const response = await DomainService.search({
                    field: "domain",
                    value: value,
                });

                return response.data.search_result;
            }
        }
    };
    handleMultiSelect = (e, options) => {
        let { form } = this.state;
        form[e.name] = options;
        this.setState({
            form,
        });
        if (e.name === "domains") {
            localStorage.setItem(
                "domains",
                JSON.stringify(this.state.form.domains)
            );
        }
    };
    handleOnPaste = (e) => {
        const getData = e.clipboardData.getData("text");
        var dataArray = getData.split(",");
        var output = dataArray.map(function (data) {
            return {
                value: data,
                label: data,
            };
        });
        console.log(output, "output");
        this.setState({
            paste_value: output,
        });

        // let option = [];
        // for (var key in dataArray) {
        //     // console.log("key " + key + " has value " + dataArray[key]);
        //     option = {
        //         value: dataArray[key],
        //         label: dataArray[key],
        //     };
        //     console.log(option, "option");
        // }

        // const option = {
        //     value: getData,
        //     label: getData,
        // };

        // console.log(segments2, "segments2");
    };

    render() {
        // console.log(this.state.paste_value, "paste_value");
        return (
            <React.Fragment>
                <div
                    style={{ height: "100%", width: "100%" }}
                    onPaste={(e) => this.handleOnPaste(e)}
                >
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
                        value={this.state.paste_value}
                    />
                </div>
                {/* <button type="button" onClick={this.handleClick}>
                    Reset value
                </button> */}
            </React.Fragment>
        );
    }
}

export default AsyncSelectField2;
