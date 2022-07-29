/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState ,useEffect} from "react";
import { InputField, Footer, Navbar } from "../../Components/index";
import { Link, Navigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./login.css";
import { LoginApi } from "../../Database Managment/auth";
import { useGlobalContext } from "../../context";

const Form = ({ loginSubmit, handleChange }) => {
	return (
		<div className="login-form section__padding">
			<h1>Login</h1>
			<div className="form">
				<form action="#" onSubmit={loginSubmit}>
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
					/>
					<div className="create-accoutn-btn">
						<button type="submit">Login</button>
					</div>
				</form>
			</div>
			<div className="google-signup">
				<FcGoogle className="google-icon" />{" "}
				<a href="#">Login with Google</a>
			</div>
			<p className="have-an-account">
				Don't have an account? <Link to={"/signup"}>Sign up</Link>
			</p>
		</div>
	);
};

function LoginForm() {
	const [userData, setUserData] = useState("");
	const { loginData, setLoginData } = useGlobalContext();
	const handleChange = (e) => {
		const { name, value } = e.target;
		const formData = { ...userData, [name]: value };
		setUserData(formData);
	};
	const loginSubmit = async (e) => {
		e.preventDefault();
		LoginApi(userData, (data) => {
			setLoginData(data);
		});
		e.target.reset();
	};
	return (
		<div>
			{localStorage.getItem("id") ? (
				<Navigate to={"/"} />
			) : (
				<>
					<Navbar link={"signup"} />
					<Form
						loginSubmit={loginSubmit}
						handleChange={handleChange}
					/>
					<Footer />
				</>
			)}
		</div>
	);
}

export default LoginForm;
