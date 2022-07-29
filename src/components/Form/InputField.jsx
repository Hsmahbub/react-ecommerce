import React from "react";
import "./Inputfield.css";
function InputField({ fieldName, placeholder, passwordtype, type, margin,onChange }) {
	return (
		<div className="input-field">
			<label htmlFor="name">{fieldName}*</label>
			<input
				type={type}
				id={fieldName}
				placeholder={placeholder}
				name={fieldName}
				required
				onChange={onChange}
			/>
			<p style={{ marginBottom: margin }}>{passwordtype}</p>
		</div>
	);
}

export default InputField;
