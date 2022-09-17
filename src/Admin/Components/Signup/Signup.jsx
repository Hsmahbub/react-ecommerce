import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AdminSignupApi } from "../../../Api Method/auth";
import { InputField } from "../../../Components/index";
import { useGlobalContext } from "../../../context";
import "./adminsignup.scss";

function AdminSignup() {
	const { handleModals, admin } = useGlobalContext();

	const navigate = useNavigate();
	const [inputData, setInputData] = useState({
		name: "",
		email: "",
		phone: "",
		password: "",
		cPassword: "",
	});
	const [errors, setErrors] = useState({});
	const handleChange = (e) => {
		setInputData({ ...inputData, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputData.password !== inputData.cPassword) {
			toast.warning("Password must be same");
			return;
		}
		handleModals("loading", true);
		AdminSignupApi(inputData, (res) => {
			if (res.data) {
				if (res.data.error) {
					setErrors(res.data.error);
				} else {
					navigate("/admin/login");
				}
			}
			handleModals("loading", false);
		});
	};
	useEffect(() => {
		Object.keys(admin).length > 0 && navigate("/admin");
	}, []);

	return (
		<div className="container">
			<div className="admin-signup">
				<form onSubmit={handleSubmit}>
					<h2>Admin Signup</h2>
					<InputField
						placeholder={"name"}
						fieldName="name"
						type={"text"}
						value={inputData.name}
						onChange={handleChange}
						isRequired={true}
					/>
					<InputField
						placeholder={"email"}
						fieldName="email"
						type={"email"}
						value={inputData.email}
						onChange={handleChange}
						isRequired={true}
					/>
					<p>{errors.email ? errors.email : null}</p>
					<InputField
						placeholder={"phone"}
						fieldName="phone"
						type={"phone"}
						value={inputData.phone}
						onChange={handleChange}
						isRequired={true}
					/>
					<p>{errors.phone ? errors.phone : null}</p>
					<InputField
						placeholder={"password"}
						fieldName="password"
						type={"password"}
						value={inputData.password}
						onChange={handleChange}
						isRequired={true}
					/>
					<InputField
						placeholder={"Confirm password"}
						fieldName="cPassword"
						type={"password"}
						value={inputData.cPassword}
						onChange={handleChange}
						isRequired={true}
					/>
					<button type="submit" className="admin-signup-btn">
						Signup
					</button>
					<Link className="link" to={"/admin/login"}>
						Login?
					</Link>
				</form>
			</div>
		</div>
	);
}

export default AdminSignup;
