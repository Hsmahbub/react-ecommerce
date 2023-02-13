import React from "react";
import "./navbar.scss";
import { ToggleItem } from "./ToggleItem/ToggleItem";
import Navtop from "./Search/Search";
import Links from "./Links";
import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { useGlobalContext } from "../../context";

function Navbar() {
	const { user, cartData } = useGlobalContext();
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
									{cartData?.length}
								</div>
							</div>
						</Link>
						{user && (
							<>
								<div className="profile">
									<Link to={"/user"}>
										<img
											src={user.img}
											alt="user"
											title="user"
										/>
									</Link>
								</div>
							</>
						)}
						<div className="menu-bar"></div>
					</div>
				</div>
			</nav>
			<ToggleItem />
		</>
	);
}

export default Navbar;
