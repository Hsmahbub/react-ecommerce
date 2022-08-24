export const validate = (values) => {
	const errors = {};

	if (!values.name) {
		errors.name = "Required";
	} else if (values.name.length > 15) {
		errors.name = "Must be 15 characters or less";
	}
	if (!values.phone) {
		errors.phone = "Required";
	} else if (values.phone.length > 15) {
		errors.phone = "Must be 15 characters or less";
	}
	if (!values.email) {
		errors.email = "Required";
	} else if (
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
	) {
		errors.email = "Invalid email address";
	}
	if (!values.password) {
		errors.password = "Required";
	} else if (values.password.length < 8) {
		errors.password = "Password must be at least 8 charater";
	}
	if (!values.cPassword) {
		errors.cPassword = "Required";
	} else if (values.cPassword !== values.password) {
		errors.cPassword = "Confirm Password must be same";
	}

	return errors;
};
