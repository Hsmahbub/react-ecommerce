import React from "react";
import "./navbar.scss";
import { NavBottom } from "./Bottom/NavBottom";
import Navtop from "./Top/Navtop";
import Links from "./Links";
import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { VscThreeBars, VscClose } from "react-icons/vsc";
import { useGlobalContext } from "../../context";
import { useState } from "react";

function Navbar({ signup, login, logout }) {
	const { user, cartItem,handleModals } = useGlobalContext();

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
					{/* nav links */}
					<div className="link_container">
						<div className="links">
							<Links
								signup={signup}
								login={login}
								logout={logout}
								handleModals={handleModals}
							/>
						</div>
					</div>
					{/* search  */}
					<div className="search-and-other">
						<Link to={"/carts"}>
							<div className="carts">
								<HiShoppingCart />
								<div className="cart-quantity">
									{cartItem.length}
								</div>
							</div>
						</Link>
						{user && (
							<>
								<div className="profile">
									<Link to={"/dashboard"}>
										<img
											src={user.img}
											alt="user"
											title="user"
										/>
									</Link>
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
				signup={signup}
				login={login}
				logout={logout}
				width={toggleMenu.width}
			/>
		</>
	);
}

export default Navbar;
