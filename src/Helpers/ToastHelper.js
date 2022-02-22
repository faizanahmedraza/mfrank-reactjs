import { toast } from "react-toastify";

const error = (value = "Oops! something went wrong.") => {
	return toast.error(value, {
		position: "bottom-left",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});
};

const success = (value = "Hooray!! operation successful") => {
	return toast.success(value, {
		position: "bottom-left",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});
};

const info = (value = "Loading please wait...") => {
	return toast.info(value, {
		position: "bottom-left",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});
};

const ToastHelper = {
	error,
	success,
	info,
};

export default ToastHelper;
