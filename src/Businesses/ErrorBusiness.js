const errorGet = (data) => {
    let errorList = [];
    data.inner.map((error) => {
        const data = {
            name: error.path,
            type: error.type,
            error: error.errors[0],
        };
        errorList.push(data);
        return errorList;
    });
    return errorList;
};
const errorCheck = (list, fieldname) => {
    let errorList = list || [];
    let errorC = null;
    for (let i = 0; i < errorList.length; i++) {
        if (errorList[i].name === fieldname) {
            return (errorC = errorList[i].error);
        }
    }
    return errorC;
};
const errorRemove = (list, fieldname) => {
    let errorList = list || [];
    return errorList.filter((error) => {
        return error.name !== fieldname;
    });
};

const errorBoundary = (value) => {
    // eslint-disable-next-line
    value.map((value) => {
        const type = typeof value;
        if (type === "object") {
            if (value === undefined) {
                throw new Error("Object error");
            }
        }

        if (value === undefined) {
            throw new Error("Value error");
        }
        // if (type === "object") {
        //     if (
        //         Object.keys(value).length === 0 ||
        //         value === null ||
        //         value === undefined
        //     ) {
        //         throw new Error("Object error");
        //     }
        // }

        // if (value === null || value === undefined) {
        //     throw new Error("Value error");
        // }
    });
};

const ErrorBusiness = {
    errorGet,
    errorCheck,
    errorRemove,
    errorBoundary,
};

export default ErrorBusiness;
