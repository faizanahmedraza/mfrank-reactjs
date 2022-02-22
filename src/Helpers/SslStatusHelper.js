import TwoWordsHelper from "Helpers/TwoWordsHelper";
const checkStatus = (ssl) => {
    let sslS = TwoWordsHelper.removeDash(ssl);
    let status = false;
    status =
        sslS.search("in active") &&
        sslS.search("active") &&
        sslS.search("failed") &&
        sslS.search(" failed");
    return status;
};

const SslStatus = {
    checkStatus,
};
export default SslStatus;
