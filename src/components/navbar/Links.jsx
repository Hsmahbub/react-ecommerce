/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { useNavigate } from "react-router-dom";
// import { useGlobalContext } from "../../context";
import { LogoutApi } from "../../Api Method/auth";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useGlobalContext } from "../../context";
import { toastObj } from "../../utils/toastObj";
export const Links = ({ className }) => {
	const navigate = useNavigate();
	const { user, handleModals } = useGlobalContext();
	const signup = !user ? "signup" : null;
	const login = !user ? "login" : null;
	const logout = user ? "logout" : null;
	// logout link
	const logoutC = (
		<>
			{logout && (
				<p
					className={className}
					onClick={() => {
						LogoutApi();
						navigate("/");
						window.location.reload();
					}}
				>
					<span>{logout}</span>
				</p>
			)}
		</>
	);

	// signup link
	const signupC = (
		<>
			{signup && (
				<p
					className={className}
					onClick={() => handleModals("signup", true)}
				>
					<span>{signup}</span>
				</p>
			)}
		</>
	);

	//login link
	const loginC = (
		<>
			{login && (
				<p
					className={className}
					onClick={() => handleModals("login", true)}
				>
					<span>{login}</span>
				</p>
			)}
		</>
	);
	return (
		<>
			<Link to="/">
				<p className={className}>
					<span>home</span>
				</p>
			</Link>
			<p className={className}>
				<Link to={"/order"}>
					<span>Order</span>
				</Link>
			</p>
			{signupC}
			{loginC}
			{logoutC}
		</>
	);
};
export default Links;
