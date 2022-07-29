/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { InputField, Footer, Navbar } from "../../Components/index";
import { Link, Navigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { SignupApi } from "../../Database Managment/auth";
import "./signup.css";
import { useState } from "react";
const Form = ({ handleFormSubmit, handleChange }) => {
	return (
		<>
			<div className="login-form section__padding">
				<h1>Sign up</h1>
				<div className="form">
					<form action="#" onSubmit={handleFormSubmit}>
						<InputField
							onChange={handleChange}
							type="text"
							fieldName={"username"}
							placeholder={"Enter your name"}
						/>
						<InputField
							onChange={handleChange}
							type="email"
							fieldName={"email"}
							placeholder={"Enter your email"}
						/>
						<InputField
							onChange={handleChange}
							type="password"
							fieldName={"password"}
							placeholder={"Enter your password"}
							passwordtype={"Must be at least 8 characters"}
							margin="1rem"
						/>
						{/* <InputField
							onChange={setConfirmPassword}
							type="password"
							fieldName={"Confirm password"}
							placeholder={"Confirm password"}
							passwordtype={""}
							margin="1rem"
						/> */}
						<div className="create-accoutn-btn">
							<button type="submit">Create account</button>
						</div>
					</form>
				</div>
				<div className="google-signup">
					<FcGoogle className="google-icon" />{" "}
					<a href="#">Sign up with Google</a>
				</div>

				<p className="have-an-account">
					Already have an account? <Link to={"/login"}>Log in</Link>
				</p>
			</div>
		</>
	);
};

function SignupForm() {
	const [signupData, setSignupData] = useState();

	const [userData, setUserData] = useState();
	const handleChange = (e) => {
		const { name, value } = e.target;
		const userFormData = { ...userData, [name]: value };
		setUserData(userFormData);
	};
	const handleFormSubmit = async (e) => {
		e.preventDefault();
		SignupApi(userData, (data) => {
			setSignupData(data);
		});
		if (signupData) if (signupData.success) e.target.reset();
	};
	return (
		<>
			{localStorage.getItem("token") ? (
				<Navigate to={"/"} />
			) : (
				<>
					<Navbar link="login" />
					{signupData && signupData.success ? (
						<Navigate to={"/login"} />
					) : (
						<Form
							handleChange={handleChange}
							handleFormSubmit={handleFormSubmit}
						/>
					)}
					<Footer />
				</>
			)}
		</>
	);
}

export default SignupForm;
