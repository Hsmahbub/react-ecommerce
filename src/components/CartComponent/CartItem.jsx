import { useState } from "react";
import { ImCross } from "react-icons/im";
const SingleCart = ({ item }) => {
	const [quantity, setQuantity] = useState(1);
	const updateCart = async (sign) => {
		sign === "increaseQuantity" &&
			quantity >= 1 &&
			setQuantity((p) => p + 1);
		sign === "decreaseQuantity" &&
			quantity > 1 &&
			setQuantity((p) => p - 1);
	};
	const romoveCart = async (itemId) => {};
	return (
		<div className="row" key={item.id}>
			<button
				type="button"
				className="cartDeleteBtn"
				onClick={() => romoveCart(item.id)}
			>
				<ImCross />
			</button>
			<div className="product col">
				<img src={item.image.url} alt="" />
				<p>{item.name}</p>
			</div>
			<div className="quantity col">
				<button onClick={() => updateCart("decreaseQuantity")}>
					-
				</button>
				<span>{quantity}</span>
				<button onClick={() => updateCart("increaseQuantity")}>
					+
				</button>
			</div>
			<div className="cart-price col">
				${item.price.formatted_with_symbol}
			</div>
			<div className="total col">
				<p>{item.line_total.formatted_with_symbol}</p>{" "}
			</div>
		</div>
	);
};

export default SingleCart;
