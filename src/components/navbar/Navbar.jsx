import React from "react";
import "./navbar.scss";
import { ToggleItem } from "./ToggleItem/ToggleItem";
import Navtop from "./Search/Search";
import Links from "./Links";
import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { VscThreeBars, VscClose } from "react-icons/vsc";
import { useGlobalContext } from "../../context";
import { useState } from "react";

function Navbar() {
	const { user, cartItem, handleModals } = useGlobalContext();

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
							<Link to={"/"}>
								<span className="color">RENOSHOP</span>
								<span>BEE</span>
							</Link>
						</p>
					</div>
					{/* nav links */}
					<div className="link_container">
						<div className="links">
							<Links className="" />
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
			<ToggleItem width={toggleMenu.width} />
		</>
	);
}

export default Navbar;
