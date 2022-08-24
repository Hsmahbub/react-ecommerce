import React from "react";
import "./order.scss";
const Items = ({ img, name, color, quantity, price }) => {
	return (
		<div className="order">
			<div className="items">
				<p>
					<img src={img} alt="img" width={"50px"} />
				</p>
				<p>
					{name}, color:{color}, price:{price}, quantity:{quantity}
				</p>
				<p>{"15.12.2022"} - 20.12.2022</p>
        <p className="track">status: deliverd</p>
			</div>
		</div>
	);
};
function Order() {
	return (
		<div className="order">
			<Items name="headphone" price="5" color="red" quantity="2" />
		</div>
	);
}

export default Order;
