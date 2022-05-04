/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./navbar.css";
import { HiShoppingCart } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { VscThreeBars, VscClose } from "react-icons/vsc";
import { useState } from "react";

const Links = ({ styles }) => (
	<>
		<p className={styles}>
			<a href="#">home</a>
		</p>
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
		<p className={styles}>
			<a href="#">accessories</a>
		</p>
	</>
);

function Navbar() {
	const [toggle, setToggle] = useState({
		isFalse: false,
		height: { height: "0px" },
	});
	const { isFalse, height, } = toggle;
	return (
		<>
			<div className="navbar section__padding">
				<div className="innerNav">
					<div className="logo">
						<p>
							<span className="color">RENOSHOP</span>
							<span>BEE</span>
						</p>
					</div>
					<div className="link_container">
						<div className="links">
							<Links />
						</div>
					</div>

					<div className="searchAndOther">
						<div className="carts">
							<HiShoppingCart />
							<div className="quantity">2</div>
						</div>
						<div className="search">
							<FaSearch />
						</div>

						<div className="menuBar">
							{isFalse ? (
								<span
									onClick={() =>
										setToggle({
											isFalse: false,
											index: 1,
											height: { height: "0px" },
										})
									}
								>
									<VscClose />
								</span>
							) : (
								<span
									onClick={() =>
										setToggle({
											isFalse: true,
											index: -1,
											height: { height: "288px" },
										})
									}
								>
									<VscThreeBars />
								</span>
							)}
						</div>

						<div className="links toggleMenu slide-fwd-center" style={height}>
							<Links styles={"menuItem"} />
						</div>
					</div>
				</div>
			</div>

		</>
	);
}

export default Navbar;
