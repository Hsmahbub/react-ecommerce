import React from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { useGlobalContext } from "../../../context";
import "./shipping.scss";
import { Address } from "./SubComponets";
function Shipping() {
	const { handleModals, billings } = useGlobalContext();
	return (
		<div id="shipping">
			<div className="wrapper">
				<RiDeleteBack2Fill
					className="cross"
					style={{ color: "#832121" }}
					onClick={() => handleModals("shipping", false)}
				/>
				<h1>Billing Details</h1>
				<div className="btn">
					<button onClick={() => handleModals("edit-form", true)}>
						Add new address
					</button>
				</div>
				<div className="shipping-data">
					{billings.length > 0 &&
						billings
							.sort((a, b) => a.createdAt - b.createdAt)
							.map((item) => (
								<Address
									key={item._id}
									handleModals={handleModals}
									item={item}
								/>
							))}
				</div>
			</div>
		</div>
	);
}

export default Shipping;
