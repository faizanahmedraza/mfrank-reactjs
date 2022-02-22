const extractTwo = (text) => {
    let siteName = text,
        shortSiteName;
    shortSiteName = siteName.split(" ").slice(0, 2).join(" ");
    return shortSiteName;
};
const removeDash = (text) => {
    let siteName = text,
        shortSiteName;
    shortSiteName = siteName.split("_").slice(0, 4).join(" ");
    return shortSiteName;
};
const TwoWordsHelper = {
    extractTwo,
    removeDash,
};
export default TwoWordsHelper;
