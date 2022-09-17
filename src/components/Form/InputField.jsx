import PropTypes from "prop-types";
import React from "react";
import "./Inputfield.scss";
function InputField({
	fieldName,
	placeholder,
	type,
	value,
	onChange,
	isRequired,
}) {
	return (
		<div className="input-field">
			<label htmlFor={fieldName}>
				{fieldName === "cPassword" ? "Confirm Password" : fieldName}
			</label>
			<input
				type={type}
				value={value}
				id={fieldName}
				placeholder={placeholder}
				name={fieldName}
				required={isRequired}
				onChange={onChange}
			/>
		</div>
	);
}

InputField.propTypes = {
	placeholder: PropTypes.string,
	type: PropTypes.string,
	fieldName: PropTypes.string,
	isRequired: PropTypes.bool,
	onChange: PropTypes.func,
	value: PropTypes.string,
};
export default InputField;
