import UrlHelper from "Helpers/UrlHelper";

const pagesGet = (perPage, number) => {
	const params = UrlHelper.parseParams(window.location.search);
	params.page = number;
	params.page_limit = perPage;
	window.location.href = `
		${window.location.origin}${window.location.pathname}?${UrlHelper.stringify(
		params
	)}
	`;
};
// const pageLimit = (perPage) => {
// 	let url = window.location.href;
// 	let checkHash = url.indexOf("?");
// 	let checkAnd = url.indexOf("&");
// 	if (checkHash !== -1 && checkAnd !== -1) {
// 		window.location.href =
// 			url.slice(checkHash, 1) +
// 			`?page_limit=${perPage}` +
// 			url.slice(checkAnd);
// 	} else if (checkHash !== -1) {
// 		window.location.href = `?page_limit=${perPage}`;
// 	} else {
// 		window.location.href = `?page_limit=${perPage}`;
// 	}
// };
const PaginationBusiness = {
	pagesGet,
	//pageLimit,
};

export default PaginationBusiness;
