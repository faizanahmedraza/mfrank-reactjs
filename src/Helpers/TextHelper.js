const emptyCheck = (value, valueUpdate = true) => {
    try {
        let newValue =
            value !== undefined && value !== null ? value : valueUpdate;
        return newValue;
    } catch (error) {
        console.log(error);
    }
};

const htmlDecode = (value) => {
    var e = document.createElement("textarea");
    e.innerHTML = value;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
};

function dataDecode(input) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.body.textContent;
}
const TextHelper = {
    emptyCheck,
    htmlDecode,
    dataDecode,
};

export default TextHelper;
