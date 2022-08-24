/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
// import { useGlobalContext } from "../../context";
import { LogoutApi } from "../../Database Managment/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { toastObj } from "../../utils/toastObj";
export const Links = ({ styles, signup, login, logout, handleModals }) => {
	// const { setUser, setCartItem } = useGlobalContext();
	// logout link
	const logoutC = (
		<>
			{logout && (
				<p
					className={styles}
					onClick={() => {
						LogoutApi();
						toast.success("Logout Successful", toastObj);
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
					className={styles}
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
					className={styles}
					onClick={() => handleModals('login',true)}
				>
					<span>{login}</span>
				</p>
			)}
		</>
	);
	return (
		<>
			<Link to="/">
				<p className={styles}>
					<span>home</span>
				</p>
			</Link>
			<p className={styles}>
				<span>women</span>
			</p>
			<p className={styles}>
				<span>men</span>
			</p>
			<p className={styles}>
				<span>kids</span>
			</p>
			<p className={styles}>
				<span>jewellery</span>
			</p>
			{signupC}
			{loginC}
			{logoutC}
		</>
	);
};
export default Links;
