/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import "./form.scss";
import { Input } from "./SubComponents";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { useGlobalContext } from "../../../context";
import {
	CreateBilling,
	UpdateBilling,
} from "../../../Database Managment/billing";
import { toast } from "react-toastify";
import { toastObj } from "../../../utils/toastObj";
import { useEffect } from "react";

function Form() {
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
			UpdateBilling(inputData, (res) => {
				if (res.data.success) {
					toast.success("Billing Updated", toastObj);
					setBillings(res.data.success.billings);
				} else {
					toast.error("not found", toastObj);
				}
				
				setInputData(intialInput);
				handleModals("edit-form", false);
				handleModals("loading", false);
			});
		} else {
			CreateBilling(inputData, (res) => {
				if (res.data) {
					if (res.data.error) {
						toast.warning(res.data.error.msg, toastObj);
					} else {
						toast.success("Billing Added", toastObj);
						setBillings(res.data.success.billings);
						handleModals("edit-form", false);
						e.target.reset();
					}
					console.log(res)
					handleModals("loading", false);
				}
			});
		}
	};

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
						<button type="submit">
							{BillingEdit.isEdit ? "Update" : "Submit"}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Form;
