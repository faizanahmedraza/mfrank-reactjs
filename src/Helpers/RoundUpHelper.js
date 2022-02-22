const roundup = (value) => {
	return Math.round(value);
};

const twodecimalplace = (value = 0) => {
	return parseFloat(value).toFixed(2);
};

const onedecimalplace = (value = 0) => {
	return parseFloat(value).toFixed(1);
};

const RoundUpHelper = {
	roundup,
	twodecimalplace,
	onedecimalplace,
};

export default RoundUpHelper;
