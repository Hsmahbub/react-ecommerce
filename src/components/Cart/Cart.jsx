import React from "react";
import { useGlobalContext } from "../../context";
import Items from "./Item/Item";
import "./cart.scss";

function Carts() {
	const { cartItem } = useGlobalContext();
	return (
		<div className="cart-item">
			{cartItem.map((item) => (
				<div key={item._id}>
					<Items item={item} />
				</div>
			))}
			<div className="update-and-clear">
				<button>Update</button>
				<button>Clear</button>
			</div>
		</div>
	);
}

export default Carts;
