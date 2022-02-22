import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import TimeStampHelper from "Helpers/TimeStampHelper";

const generate = (data) => {
    return data.map((detail) => (
        <tr>
            <td>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"/site/" + detail.name}
                >
                    {detail.name}
                </a>
            </td>
            <td>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={detail.domain}
                >
                    {detail.domain}
                    <FontAwesomeIcon
                        icon={faExternalLinkAlt}
                        className="ml-2"
                    />
                </a>
            </td>
            <td>{TimeStampHelper.standardDateTimeFormat(detail.started_at)}</td>
            <td>{TimeStampHelper.standardDateTimeFormat(detail.created_at)}</td>
        </tr>
    ));
};

const Detail502Business = {
    generate,
};

export default Detail502Business;
