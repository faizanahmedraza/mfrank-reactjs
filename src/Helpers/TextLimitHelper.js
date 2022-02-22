const limit = (text, limit = 20) => {
	let shortText = text;
	if (text && text.length > limit) {
		shortText = text.slice(0, limit) + "...";
	}
	return shortText;
};

const TextLimitHelper = {
	limit,
};
export default TextLimitHelper;
