/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { toast } from "react-toastify";
import {
	CreateBillingApi,
	UpdateBillingApi,
} from "../../../Api Method/billing";
import { useGlobalContext } from "../../../context";
import {
	billingFormValidator,
	buttonValidator,
} from "../../../utils/formValidation";
import { toastObj } from "../../../utils/toastObj";
import "./form.scss";
import { Input } from "./SubComponents";

function BillingForm() {
	const { handleModals, BillingEdit, setBillingEdit, billings, setBillings } =
		useGlobalContext();

	const editBillingData = billings.filter(
		(item) => item._id === BillingEdit.id
	);
	// console.log(editBillingData);
	const intialInput = {
		name: "",
		email: "",
		phone: "",
		address: "",
		postcode: "",
	};
	const [inputData, setInputData] = useState(intialInput);
	const [errors, setErrors] = useState({});
	const { isDisabled, css } = buttonValidator(errors);
	useEffect(() => {
		let billing;
		editBillingData.length < 1
			? (billing = inputData)
			: (billing = editBillingData[0]);
		setInputData(billing);
	}, [BillingEdit]);
	const handleChange = (e) => {
		const formData = { ...inputData, [e.target.name]: e.target.value };
		setInputData(formData);
	};
	const handleFormSubmit = (e) => {
		e.preventDefault();
		handleModals("loading", true);
		if (BillingEdit.isEdit) {
			UpdateBillingApi(inputData, BillingEdit.id, (res) => {
				if (res.status === 200) {
					setBillings((p) => [
						...p
							.filter((i) => i._id !== BillingEdit.id)
							.sort((a, b) => b.createdAt - a.createdAt),
						res.data,
					]);
					setInputData(intialInput);
					handleModals("edit-form", false);
					toast.success("Billing Updated", toastObj);
				} else {
					toast.error(res.data.message, toastObj);
				}
				handleModals("loading", false);
			});
		} else {
			CreateBillingApi(inputData, (res) => {
				if (res.status === 201) {
					toast.success("Billing Added", toastObj);
					setBillings((p) => [...p, res.data]);
					handleModals("edit-form", false);
					setInputData(intialInput);
				} else {
					toast.error(res.data.message, toastObj);
				}
				handleModals("loading", false);
			});
		}
	};

	// use effect for errors
	useEffect(() => {
		setErrors(billingFormValidator(inputData));
	}, [inputData]);

	return (
		<div id="edit-form">
			<div className="wrapper">
				<RiDeleteBack2Fill
					style={{ color: "#832121" }}
					className="cross"
					onClick={(e) => {
						handleModals("edit-form", false);
						setInputData(intialInput);
						setBillingEdit({ isEdit: false });
					}}
				/>
				<div className="shipping-input">
					<form id="form" onSubmit={handleFormSubmit}>
						<Input
							name="name"
							type="text"
							placeholder={"Name"}
							labelValue="Name*"
							value={inputData.name}
							handleChange={handleChange}
						/>
						<br />
						<Input
							name="email"
							type="email"
							labelValue="Email*"
							value={inputData.email}
							placeholder="Email"
							handleChange={handleChange}
						/>
						<br />
						<Input
							name="phone"
							type="text"
							labelValue="Phone*"
							value={inputData.phone}
							handleChange={handleChange}
							placeholder="Phone"
						/>
						<br />
						<Input
							labelValue="Address*"
							type="text"
							value={inputData.address}
							name="address"
							placeholder="Street address"
							handleChange={handleChange}
						/>
						<br />
						<Input
							labelValue="Postcode/Zip*"
							type="text"
							value={inputData.postcode}
							name="postcode"
							placeholder="Postcode/Zip"
							handleChange={handleChange}
						/>
						<br />
						<button
							type="submit"
							disabled={!isDisabled}
							style={css}
						>
							{BillingEdit.isEdit ? "Update" : "Submit"}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default BillingForm;
