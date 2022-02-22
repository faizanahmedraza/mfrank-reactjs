import React from 'react';
const available = (list, loading = false) => {
    let message;
    if (loading === true) {
        message = (
            <td colSpan="100%" className="no-data">
                Loading...
            </td>
        );
    } else if (list.length === 0 && loading === false) {
        message = (
            <td colSpan="100%" className="no-data">
                No Data Available
            </td>
        );
    } else {
        message = '';
    }
    return message;
};

const noList = (list, loading = false) => {
    let message;
    if (loading === true) {
        message = (
            <td colspan="100%" className="no-data">
                Loading...
            </td>
        );
    } else if (list.length === 0 && loading === false) {
        message = (
            <td colspan="100%" className="no-data">
                No Data Available
            </td>
        );
    } else {
        message = '';
    }
    return message;
};
const countArray = (data) => {
    try {
        return data.length;
    } catch (err) {
        console.log('Error, Array Count Helper' + err);
    }
};

const search = (list, loading = false) => {
    let message;
    if (loading === true) {
        message = <div className="plugin-no-data">Loading...</div>;
    } else if (list.length === 0 && loading === false) {
        message = (
            <div className="plugin-no-data">
                No plugins found. Try a different search.
            </div>
        );
    } else {
        message = '';
    }
    return message;
};

const NoData = {
    available,
    noList,
    countArray,
    search,
};

export default NoData;
