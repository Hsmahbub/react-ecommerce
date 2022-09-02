//button disabled
export const buttonValidator = (error) => {
	let value = {};
	value.isDisabled = Object.keys(error).length < 1;
	!value.isDisabled &&
		(value.css = {
			opacity: ".5",
			cursor: "not-allowed",
		});
	return value;
};

// signup form validator
export const signupFormValidator = (values) => {
	const errors = {};

	values.name.length > 15 && (errors.name = "Must be 15 characters or less");

	values.phone.length > 15 &&
		(errors.phone = "Must be 15 characters or less");

	!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) &&
		(errors.email = "Invalid email address");

	values.password.length < 8 &&
		(errors.password = "Password must be at least 8 charater");

	values.cPassword !== values.password &&
		(errors.cPassword = "Confirm Password must be same");

	return errors;
};

// login form validator
export const loginFormValidator = (values) => {
	const errors = {};
	values.username.length < 3 &&
		(errors.username = "Email or phone should be greater than 3 character");

	values.password.length < 8 && (errors.password = "invalid password");

	return errors;
};

export const billingFormValidator = (values) => {
	let errors = {};
	!Object.values(values).every((i) => i !== "") &&
		(errors.input = "all fields are required");
	return errors;
};
// billing form validation
