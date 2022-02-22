import React, { Component } from "react";
import Header from "Components/Header";

/*
This template is in full width
using 12 col of bootstrap
*/

class TemplateMain extends Component {
	render() {
		return (
			<section id="template-main" className="template-main">
				<Header />
				{this.props.children}
			</section>
		);
	}
}

export default TemplateMain;
