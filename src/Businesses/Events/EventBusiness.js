import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import TimeStampHelper from 'Helpers/TimeStampHelper';
import Capitilize from 'Helpers/CapitilizeHelper';
import PermissionHelper from 'Helpers/PermissionHelper';

const generate = (data, eventDelete) => {
    if (data) {
        const list = data.map((event) => {
            return (
                <React.Fragment>
                    <tr>
                        <td>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={'/events/edit/' + event.id}>
                                {event.name}
                            </a>
                        </td>
                        {/* <td>{event.groups}</td> */}
                        <td>{Capitilize.capital(event.status)}</td>
                        <td>
                            {TimeStampHelper.standardDateFormat(
                                `${event.created_at}`
                            )}
                        </td>

                        <td className="text-center custom-control custom-switch">
                            <a
                                href={'/events/' + event.id}
                                className="btn btn-link"
                                title="View">
                                <FontAwesomeIcon icon={faEye} />
                            </a>{' '}
                            <a
                                href={'/events/edit/' + event.id}
                                className={`btn btn-link ${
                                    PermissionHelper.validate([
                                        'events_update',
                                        'access_all',
                                    ]) === true
                                        ? ''
                                        : 'isDisabled'
                                }`}
                                title={
                                    PermissionHelper.validate([
                                        'events_update',
                                        'access_all',
                                    ]) === true
                                        ? 'Edit'
                                        : 'Permission Denied!'
                                }>
                                <FontAwesomeIcon icon={faPencilAlt} />
                            </a>{' '}
                            <button
                                className="btn text-danger"
                                title={
                                    PermissionHelper.validate([
                                        'events_delete',
                                        'access_all',
                                    ]) === true
                                        ? 'Delete'
                                        : 'Permission Denied!'
                                }
                                onClick={() => eventDelete(event.id)}
                                disabled={
                                    PermissionHelper.validate([
                                        'events_delete',
                                        'access_all',
                                    ]) === true
                                        ? false
                                        : true
                                }>
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

const GroupBusiness = {
    generate,
};

export default GroupBusiness;
