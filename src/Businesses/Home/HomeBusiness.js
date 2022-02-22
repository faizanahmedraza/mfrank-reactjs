import React from 'react';
// import { faPhp } from "@fortawesome/free-brands-svg-icons";
import 'Assets/css/sites.css';

import PublicCardComponent from "Components/Public/UI/PublicCardComponent";


const generate = (data) => {
    if (data) {
        const list = data.map((blog) => {
            return (
                <React.Fragment>
                <PublicCardComponent
                title={blog.title}
                description={blog.description}
                link = {blog.link}
                tags = {blog.tags}
                image = {blog.image}
                date = {blog.created_at}
                />
                </React.Fragment>
            );
        });
        return list;
    }
};

const SiteListBusiness = {
    generate,
};

export default SiteListBusiness;
