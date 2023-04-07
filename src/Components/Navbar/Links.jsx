/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useGlobalContext } from "../../context";
import { LogoutApi } from "../../Api Method/auth";
import { useGlobalContext } from "../../context";
import homeIcon from './icons/home.png'
import orderIcon from './icons/order.png'
import logoutIcon from './icons/logout.png'
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
					<img src={logoutIcon} width={'30px'} alt="" />
					{/* <span>{logout}</span> */}
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
						navigate('/signup')
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
					style={{ padding: '.5rem' }}
					onClick={() => {
						navigate('/login')
					}}
				>
					<span>{login}</span>
				</p>
			)}
		</>
	);

	const orderC = user && (
		<p
			className={className}
		>
			<Link to={'/orders'}>
				<img src={orderIcon} width={'30px'} alt="" />
			</Link>
		</p>
	);
	return (
		<>
			<p
				className={className}
				style={{ display: !user ? 'none' : 'initial' }}
			>
				<Link to={'/'}>
					<img src={homeIcon} width={'30px'} alt="" />
				</Link>
			</p>

			{orderC}
			{signupC}
			{loginC}
			{logoutC}
		</>
	);
};
export default Links;
