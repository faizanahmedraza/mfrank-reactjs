import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import Capitilize from 'Helpers/CapitilizeHelper';
// import Confirm from "Helpers/ConfirmationHelper";
// import ProductStatusAction from "Redux/V1/Products/Status/ProductStatusAction"
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

const generate = (data, onSwitch, productDelete) => {
    console.log("data",data)
    if (data) {
        const list = data.map((product,index) => {
            console.log("STATUS", product.status)
            return (
                <React.Fragment>
                    <tr
                        className="" key={index}>
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
                        <td>
                            <span className="custom-control custom-switch">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id={"customSwitches" + product.id}
                                    checked={
                                      +product.status === 1 ? true : false
                                    }

                                    onChange={() =>
                                        onSwitch(
                                            product.id 
                                        )
                                    }
                                />

                                <label
                                    className="custom-control-label"
                                    htmlFor={"customSwitches" + product.id}
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title={"Active/In Active"}
                                ></label>
                            </span>
                        </td>
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
