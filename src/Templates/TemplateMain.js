import React, { Component } from "react";

/*
This template is in full width
using 12 col of bootstrap
*/

class TemplateMain extends Component {
	render() {
		return (
			<section id="template-main" className="template-main">
				{this.props.children}
			</section>
		);
	}
}

export default TemplateMain;
