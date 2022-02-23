import React from "react";
import "Assets/css/guest.css";
import { connect } from "react-redux";
import BlogListAction from "Redux/V1/Products/Get/BlogGetAction";
import HomeBusiness from "Businesses/Home/HomeBusiness";
import queryString from "query-string";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import AsyncSelectField from "Components/Forms/Fields/AsyncSelectField";
class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            time: "",
            ampm: "",
        };
    }
    
    componentDidMount() {
        this.getDate();
        this.intervalTimeID = setInterval(() => this.getTime(), 1000);
        const query = queryString.parse(this.props.location.search);
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
        this.props.dispatch(
            BlogListAction.blogGet({
                params: params,
                type: "guest",
            })
        );
    }

    getTime = () => {
        let today = new Date(),
            time = today.getHours() + " : " + today.getMinutes(),
            ampm = today.getHours >= 12 ? "PM" : "AM";
        this.setState({ time, ampm });
    };

    getDate = () => {
        let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let monthNames = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let today = new Date(),
            date = dayNames[today.getDay()]+', '+today.getDate()+' '+monthNames[today.getMonth()]+' '+today.getFullYear();
        this.setState({ date });
    };

    componentWillUnmount() {
        clearInterval(this.intervalDateID);
    }

    render() {
        const blogs = this.props.blogs.blogs;
        return (
            <>
                <div className="row">
                    <div className="col-12 col-md-8 col-lg-8">
                        <div className="container-fluid m-0 p-0">
                            <div className="blog-header pl-4 pt-5">
                                <div className="summary">
                                    <h3 className="text-sec pb-0">{this.state.date}</h3>
                                    <p className="text-half-sec">
                                        Latest content in B2B, News, SaaS, eCommerce, Automation,
                                        B2C, Strategy and Social.
                                    </p>
                                </div>
                                <div className="toolbar">
                                    <div className="actions"></div>
                                    <div className="type-selector"></div>
                                </div>
                            </div>
                            <div className="blog-body pl-4 pr-4">
                                <div className="body-wrapper">
                                    <div className="row">{HomeBusiness.generate(blogs)}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4">
                        <div className="d-flex justify-content-center alig-items-start flex-column flex-grow-1">
                            <div className="clock ml-5 mt-5">
                                <span className="time-st">{this.state.time}</span>
                                <span className="ampm">{this.state.ampm}</span>
                            </div>
                            <div className="search-box">
                                <form>
                                <div class="form-group has-search">
                                    <button type="submit" class="form-control-feedback"><FontAwesomeIcon icon={faSearch} /></button>
                                    <AsyncSelectField
                                        name="posts"
                                        dispatch={this.props.dispatch}
                                        placeholder="Search By Title"
                                        defaultValue={"title_options"}
                                        isMulti={false}
                                    />
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs.list,
    };
};

export default connect(mapStateToProps)(MainComponent);
