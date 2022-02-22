import React, { Component } from "react";
import InputText from "Components/Forms/Fields/InputTextField";
import LoginAction from "Redux/V1/Auth/Login/LoginPostAction";
class LoginForm extends Component {
    state = {
        form: {
            email: null,
            password: null,
        },
    };

    handleChange = (event) => {
        const { form } = this.state;
        const target = event.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            form: {
                ...form,
                [name]: value,
            },
        });
    };

    handleSubmit = async () => {
        this.props.dis(LoginAction.loginPost(this.state.form));
        // alert(JSON.stringify(this.state.form));
    };
    render() {
        return (
            <React.Fragment>
                <form method="POST">
                    <InputText
                        placeholder={"Email"}
                        name={"email"}
                        type={"email"}
                        value={this.state.form.email}
                        handleChange={this.handleChange}
                    />

                    <InputText
                        placeholder={"Password"}
                        name={"password"}
                        type={"password"}
                        value={this.state.form.password}
                        handleChange={this.handleChange}
                    />
                </form>
                <button
                    className={`btn btn-brand-02 btn-block ${
                        this.props.loading ? "loading" : ""
                    }`}
                    onClick={this.handleSubmit}
                >
                    Sign In
                </button>
            </React.Fragment>
        );
    }
}

export default LoginForm;
