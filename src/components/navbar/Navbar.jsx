/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./navbar.css";
import { HiShoppingCart } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { VscThreeBars, VscClose } from "react-icons/vsc";
import { useGlobalContext } from "../../context";
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
	const { toggle, handleToggle, toggleClose, setSearch } = useGlobalContext();
	const { height, isFalse } = toggle;
	const [searchVal, setSearchVal] = useState("");
	const [isInput, setIsInput] = useState(false);
	const [styleObject, setStyleObject] = useState({
		width: "0px",
		display: "hidden",
	});
	return (
		<>
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
							<Links />
						</div>
					</div>

					<div className="searchAndOther">
						<div className="carts">
							<HiShoppingCart />
							<div className="cart-quantity">2</div>
						</div>
						<div
							className="search"
							onClick={() => {
								if (!isInput) {
									setIsInput(true);
									setStyleObject({
										width: "200px",
										display: "visible",
									});
								} else {
									setIsInput(false);
									setStyleObject({
										width: "0px",
										display: "hidden",
									});
								}
							}}
						>
							<FaSearch />
						</div>
						<div
							className="search-input-field"
							style={{ width: styleObject.width }}
						>
							<input
								type="text"
								style={{ visibility: styleObject.display }}
								value={searchVal}
								onChange={(e) => setSearchVal(e.target.value)}
							/>
							<button
								type="button"
								style={{ visibility: styleObject.display }}
								onClick={() => {
									setSearch(searchVal);
								}}
							>
								Search
							</button>
						</div>

						<div className="menuBar">
							{isFalse ? (
								<span onClick={toggleClose}>
									<VscClose />
								</span>
							) : (
								<span onClick={handleToggle}>
									<VscThreeBars />
								</span>
							)}
						</div>

						<div
							className="links toggleMenu slide-fwd-center"
							style={height}
						>
							<Links styles={"menuItem"} />
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
