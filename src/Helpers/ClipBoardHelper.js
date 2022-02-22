import ToastHelper from "./ToastHelper";

const copy = (text) => {
    let el;
    el = document.createElement("textarea");
    el.value = text;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    ToastHelper.success("Copied!");
};

const ClipBoardHelper = {
    copy,
};
export default ClipBoardHelper;
