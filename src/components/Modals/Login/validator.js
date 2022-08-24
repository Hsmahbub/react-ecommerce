export const validate = (values) => {
	const errors = {};
	if (!values.username) {
		errors.username = "Required";
	} else if (values.username.length < 3) {
		errors.username = "Email or phone should be greater than 3 character";
	}
	if (!values.password) {
		errors.password = "Required";
	}

	return errors;
};
