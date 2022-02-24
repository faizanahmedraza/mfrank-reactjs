import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import Capitilize from 'Helpers/CapitilizeHelper';
// import { faPhp } from "@fortawesome/free-brands-svg-icons";
import 'Assets/css/sites.css';
// import { Badge } from 'react-bootstrap';

// const generateTags = (tags) => {
//     if (tags) {
//         return tags.map((item) => {
//             return (
//                 <>
//                     <Badge color="primary" variant="primary" className="mr-2">
//                         {item.name}{' '}
//                     </Badge>
//                 </>
//             );
//         });
//     }
// };
const generate = (data, quickLogin, productDelete) => {
    if (data) {
        const list = data.map((product) => {
            return (
                <React.Fragment>
                    <tr
                        className="">
                        <td>
                            {product.id}
                        </td>
                        <td>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={'/edit/' + product.id}>
                                {Capitilize.capital(product.title)}
                            </a>
                        </td>

                        <td>
                            {product.description}
                        </td>
                        <td>{product.status === 1 ? "Active" : "In Active"}</td>
                        <td className="text-center custom-control custom-switch">
                            <a
                                href={"/edit/" + product.id}
                                className={`btn btn-link`}
                                title={"Edit"
                                }
                            >
                                <FontAwesomeIcon icon={faPencilAlt} />
                            </a>
                            <button
                                className="btn text-danger"
                                title={"Delete"
                                }
                                onClick={() => productDelete(product.id)}
                                disabled={
                                    false
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

const ProductBusiness = {
    generate,
};

export default ProductBusiness;
