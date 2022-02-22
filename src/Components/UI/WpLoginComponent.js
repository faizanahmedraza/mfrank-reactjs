import React, { Component } from "react";
import { ReactSVG } from "react-svg";
import { Button } from "react-bootstrap";
import WordpressLoginActionV2 from "Redux/V2/Sites/Features/WordpressLogin/WordpressLoginActionV2";
import { connect } from "react-redux";
import config from "Configs/Config";

class WpLoginComponent extends Component {
    quickLogin = (e) => {
        this.props.dispatch(WordpressLoginActionV2.wordpressLogin(e));
    };
    render() {
        return (
            <React.Fragment>
                <Button className={this.props.className}>
                    <ReactSVG
                        src={`${config.public_url}/assets/img/wp-icon.svg`}
                        alt="wordpresswhite"
                        onClick={(e) => this.quickLogin(this.props.identity)}
                    />{" "}
                    {this.props.text}
                </Button>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        site_filter: state.siteV1.filter,
    };
};

export default connect(mapStateToProps)(WpLoginComponent);
