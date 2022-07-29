/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./navbar.scss";
import { NavBottom, } from "./NavBottom";
import Navtop from "./Navtop";
import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { LogoutApi } from "../../Database Managment/auth";
import { VscThreeBars, VscClose } from "react-icons/vsc";
import { useGlobalContext } from "../../context";
import { useState } from "react";

export const Links = ({ styles, link, link2, logout }) => {
	const { loginData, setLoginData } = useGlobalContext();
	const profile = loginData;
	return (
		<>
			<Link to="/">
				<p className={styles}>
					<a href="#">home</a>
				</p>
			</Link>
			<p className={styles}>
				<a href="#">women</a>
			</p>
			<p className={styles}>
				<a href="#">men</a>
			</p>
			<p className={styles}>
				<a href="#">kids</a>
			</p>
			<p className={styles}>
				<a href="#">jewellery</a>
			</p>
			<Link to={`/${link}`}>
				{!profile && (
					<p className={styles}>
						<a href="#">{link}</a>
					</p>
				)}
			</Link>
			<Link to={`/${link2}`}>
				{!profile && (
					<p className={styles}>
						<a href="#">{link2}</a>
					</p>
				)}
			</Link>

			{profile && (
				<p
					className={styles}
					onClick={() => {
						LogoutApi();
						setLoginData("");
					}}
				>
					<a href="#">{logout}</a>
				</p>
			)}
		</>
	);
};

function Navbar({ link, link2, logout }) {
	const { loginData } = useGlobalContext();
	const profile = loginData;
	const [toggleMenu, setToggleMenu] = useState({
		isFalse: false,
		width: "0px",
	});
	const openToggleMenu = () => {
		setToggleMenu({
			isFalse: true,
			width: "200px",
		});
	};
	const closeToggleMenu = () => {
		setToggleMenu({
			isFalse: false,
			width: "0px",
		});
	};
	return (
		<>
			<Navtop />
			<nav className="navbar section__padding">
				<div className="innerNav">
					<div className="logo">
						<p>
							<span className="color">RENOSHOP</span>
							<span>BEE</span>
						</p>
					</div>
					<div className="link_container">
						<div className="links">
							<Links link={link} link2={link2} logout={logout} />
						</div>
					</div>

					<div className="search-and-other">
						<Link to={"/cart"}>
							<div className="carts">
								<HiShoppingCart />
								<div className="cart-quantity">{""}</div>
							</div>
						</Link>
						{profile && (
							<>
								<div className="profile" title="Profile">
									<Link to={"/profile"}>
										<img
											src={
												profile.img
													? profile.img
													: "https://springer-hagen.de/wp-content/uploads/2017/03/testy3-1-1.png"
											}
											alt="#"
										/>
									</Link>
									{/* <div className="profile-hover"> */}
									{/* </div> */}
								</div>
							</>
						)}
						<div className="menu-bar">
							{toggleMenu.isFalse ? (
								<span onClick={closeToggleMenu}>
									<VscClose />
								</span>
							) : (
								<span onClick={openToggleMenu}>
									<VscThreeBars />
								</span>
							)}
						</div>
					</div>
				</div>
			</nav>
			<NavBottom
				link={link}
				link2={link2}
				width={toggleMenu.width}
				logout={logout}
			/>
			
		</>
	);
}

export default Navbar;
