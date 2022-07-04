import { useGlobalContext } from "../../context";
import { ImCross } from "react-icons/im";
import { useState } from "react";
const SingleCart = ({ item }) => {
	const { dynamicData, setCartProd } = useGlobalContext();
	const [quantity, setQuantity] = useState(1);
	const cartHandlClick = (id) => {
		const start = id - 1;
		const cart = dynamicData.splice(start, 1);
		setCartProd(dynamicData);
	};
	const cartInputChange = () => {
		setQuantity((p) => p + 1);
	};
	const total = quantity * item.price;
	console.log(total);
	return (
		<div className="row" key={item.id}>
			<button
				type="button"
				className="cartDeleteBtn"
				onClick={() => cartHandlClick(item.id)}
			>
				<ImCross />
			</button>
			<div className="product col">
				<img src={item.img} alt="" />
				<p>{item.name}</p>
			</div>
			<div className="quantity col">
				<input
					type="number"
					value={quantity}
					onChange={cartInputChange}
					min="1"
				/>
			</div>
			<div className="cart-price col">${item.price}</div>
			<div className="total col">
				<p>${total}</p>
			</div>
		</div>
	);
};

export default SingleCart;
