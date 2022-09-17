import React, { useState } from "react";
import { InputField } from "../../../Components";
import "./addproduct.scss";

function ProductForm() {
	const [inputData, setInputData] = useState({
		title: "",
		description: "",
		category: "",
		price: "",
		inStock: "",
		size: "",
		color: "",
	});
	const handleChange = (e) => {
		setInputData({ ...inputData, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<div className="add-product">
			<form onSubmit={handleSubmit}>
				<InputField
					fieldName={"title"}
					type="text"
					value={inputData.title}
					placeholder={"title"}
					onChange={handleChange}
					isRequired={true}
				/>
				<InputField
					fieldName={"description"}
					type="text"
					value={inputData.description}
					placeholder={"description"}
					onChange={handleChange}
					isRequired={true}
				/>
				<InputField
					fieldName={"category"}
					type="text"
					value={inputData.category}
					placeholder={"category"}
					onChange={handleChange}
					isRequired={true}
				/>
				<div className="df">
					<InputField
						fieldName={"price"}
						type="number"
						value={inputData.price}
						placeholder={"$price"}
						onChange={handleChange}
						isRequired={true}
					/>
					<div className="divider"></div>
					<InputField
						fieldName={"inStock"}
						type="number"
						value={inputData.inStock}
						placeholder={"inStock"}
						onChange={handleChange}
					/>
				</div>

				<div className="df">
					<InputField
						fieldName={"color"}
						type="text"
						value={inputData.color}
						placeholder={"color (optional)"}
						onChange={handleChange}
					/>
					<div className="divider"></div>
					<InputField
						fieldName={"size"}
						type="text"
						value={inputData.size}
						placeholder={"size (optional)"}
						onChange={handleChange}
					/>
				</div>

				<button className="add-btn" type="submit">
					Add Product
				</button>
			</form>
		</div>
	);
}

export default ProductForm;
