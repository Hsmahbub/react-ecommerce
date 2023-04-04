const customIterator = (arr, compareWith) => {
	let values = {};
	arr.forEach((i) => {
		if (i._id === compareWith) {
			values = i;
		}
	});
	return values;
};

export { customIterator };
