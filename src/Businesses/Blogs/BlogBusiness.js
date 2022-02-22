import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faExternalLinkAlt, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import PermissionHelper from "Helpers/PermissionHelper";
import Capitilize from 'Helpers/CapitilizeHelper';
// import { faPhp } from "@fortawesome/free-brands-svg-icons";
import 'Assets/css/sites.css';
import { Badge } from 'react-bootstrap';

const generateTags = (tags) => {
    if (tags) {
        return tags.map((item) => {
            return (
                <>
                    <Badge color="primary" variant="primary" className="mr-2">
                        {item.name}{' '}
                    </Badge>
                </>
            );
        });
    }
};
const generate = (data, quickLogin, blogDelete) => {
    if (data) {
        const list = data.map((blog) => {
            return (
                <React.Fragment>
                    <tr
                        className={`${
                            blog.hosting_location === 'bolts' ? 'row-color' : ''
                        }`}>
                        <td><img src={blog.image} alt="there might be some data" height="40"></img></td>  
                        <td>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={'/blogs/' + blog.id}>
                                {Capitilize.capital(blog.title)}
                            </a>
                        </td>

                        <td>
                            {blog.description}
                        </td>

                        <td>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={blog.link}>
                                {blog.link}
                                <FontAwesomeIcon
                                    icon={faExternalLinkAlt}
                                    className="ml-2"
                                />
                            </a>
                        </td>
                        <td>{generateTags(blog.tags)}</td>
                        <td>{blog.status}</td>
                        <td className="text-center custom-control custom-switch">

              <a
                href={"/blogs/" + blog.id}
                className="btn btn-link"
                title="View"
              >
                <FontAwesomeIcon icon={faEye} />
              </a>{" "}
              <a
                href={"/blogs/edit/" + blog.id}
                className={`btn btn-link ${
                  PermissionHelper.validate(["users_update", "access_all"]) ===
                  true
                    ? ""
                    : "isDisabled"
                }`}
                title={
                  PermissionHelper.validate(["users_update", "access_all"]) ===
                  true
                    ? "Edit"
                    : "Permission Denied!"
                }
              >
                <FontAwesomeIcon icon={faPencilAlt} />
              </a>{" "}
              <button
                className="btn text-danger"
                title={
                  PermissionHelper.validate(["users_delete", "access_all"]) ===
                  true
                    ? "Delete"
                    : "Permission Denied!"
                }
                onClick={() => blogDelete(blog.id)}
                disabled={
                  PermissionHelper.validate(["users_delete", "access_all"]) ===
                  true
                    ? false
                    : true
                }
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </td>
                    </tr>
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
