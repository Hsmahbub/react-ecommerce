/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { useNavigate } from "react-router-dom";
// import { useGlobalContext } from "../../context";
import { LogoutApi } from "../../Api Method/auth";
import { useGlobalContext } from "../../context";
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
					onClick={() => {
						handleModals("signup", true);
						handleModals("login", false);
					}}
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
					onClick={() => {
						handleModals("login", true);
						handleModals("signup", false);
					}}
				>
					<span>{login}</span>
				</p>
			)}
		</>
	);
	return (
		<>
			<p
				className={className}
				onClick={() => {
					navigate("/");
					window.location.reload();
				}}
			>
				<span>home</span>
			</p>

			<p
				className={className}
				onClick={() => {
					navigate("/order");
					window.location.reload();
				}}
			>
				<span>Order</span>
			</p>
			{signupC}
			{loginC}
			{logoutC}
		</>
	);
};
export default Links;
