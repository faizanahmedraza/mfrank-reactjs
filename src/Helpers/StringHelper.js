import CryptoJS from "crypto-js";

const capitalize = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
};
const dashRemove = (value) => {
    let newValue = value.replace(/_/, " ");
    return newValue;
};
const emptyCheck = (value, valueUpdate = true) => {
    try {
        let newValue =
            value !== undefined && value !== null ? value : valueUpdate;
        return newValue;
    } catch (error) {
        console.log(error);
    }
};
const stringToHash = (string) => {
    try {
        const hash = CryptoJS.MD5(string).toString();
        return hash;
    } catch (error) {
        console.log(error);
    }
};
const urlValueGet = (string) => {
    try {
        let str = string;
        str = str.split("/");
        return str[str.length - 1];
    } catch (error) {
        console.log(error);
    }
};
const replace = (value, string) => {
    try {
        const final = value.replace(string, "");
        return final;
    } catch (error) {
        console.log(error);
    }
};
const StringHelper = {
    capitalize,
    dashRemove,
    emptyCheck,
    stringToHash,
    urlValueGet,
    replace,
};

export default StringHelper;
