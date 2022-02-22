import React, { Component } from "react";
import TimeStampHelper from "Helpers/TimeStampHelper";

const generateTags = (tags) => {
    if (tags) {
        return tags.map((item, i, arr) => {
            if (arr.length - 1 === i) {
                return (
                    <>

                        {item.name}{'.'}

                    </>
                );
            } else {
                return (
                    <>

                        {item.name}{', '}

                    </>
                );
            }

        });
    }
};

class PublicCardComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="col-sm-12 col-md-6 col-lg-6 mb-4">
                    <div class="card cstm-card">
                        <div class="card-body">
                            <div className="row">
                                <div className="col-sm-8 col-md-9 pr-0">
                                    <a target="_blank" rel="noopener noreferrer" href={this.props.link} className="text-decoration-none">
                                        <h5 class="card-title card-title-height font-weight-bold">{this.props.title}</h5>
                                        <p class="card-text text-half-sec truncate-text pt-2 mb-0">{this.props.description} </p>
                                        <p className="card-text text-half-sec mb-0 mt-1 truncate-text">{TimeStampHelper.standardDateFormat(this.props.date)}</p>
                                        <p className="card-text text-half-sec mb-0 mt-1 truncate-text">{generateTags(this.props.tags)} </p>
                                    </a>
                                </div>
                                <div className="col-sm-4 col-md-3 d-flex align-items-start justify-content-end">
                                    <img src={this.props.image} alt="There might be some data" className="blog-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default PublicCardComponent;
