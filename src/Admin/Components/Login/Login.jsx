import React from "react";
import "./adminlogin.scss";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AdminLoginApi } from "../../../Api Method/auth";
import { InputField } from "../../../Components/index";
import { useGlobalContext } from "../../../context";
function AdminLogin() {
	const { handleModals, admin } = useGlobalContext();
	const navigate = useNavigate();
	const [inputData, setInputData] = useState({ username: "", password: "" });
	const [errors, setErrors] = useState({ username: "", password: "" });
	const handleChange = (e) => {
		setInputData({ ...inputData, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		handleModals("loading", true);
		AdminLoginApi(inputData, (res) => {
			if (res.data) {
				if (res.data.error) {
					setErrors(res.data.error);
				} else {
					navigate("/admin");
				}
			}
			handleModals("loading", false);
		});
	};

	useEffect(() => {
		Object.keys(admin).length > 0 && navigate("/admin");
	}, [admin]);

	return (
		<div className="container">
			<div className="admin-login">
				<h2>Admin Login</h2>
				<form onSubmit={handleSubmit}>
					<InputField
						fieldName={"username"}
						type="text"
						placeholder={"username"}
						value={inputData.username}
						onChange={handleChange}
						isRequired={true}
					/>
					<p>{errors.username ? errors.username : null}</p>
					<InputField
						fieldName={"password"}
						type="password"
						placeholder={"password"}
						value={inputData.password}
						onChange={handleChange}
						isRequired={true}
					/>
					<p>{errors.password ? errors.password : null}</p>
					<button type="submit" className="admin-login-btn">
						Login
					</button>
					<Link className="link" to={"/admin/signup"}>
						Register?
					</Link>
				</form>
			</div>
		</div>
	);
}

export default AdminLogin;
