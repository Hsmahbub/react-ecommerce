import {
	RiArrowUpSFill,
	RiArrowDownSFill,
	RiDeleteBin2Fill,
} from "react-icons/ri";
import { useState } from "react";
import { useGlobalContext } from "../../../context";
import { addToCart, deleteOneCart } from "../../../Database Managment/cart";
import "./item.scss";
import { useEffect } from "react";
const Items = ({ item }) => {
	const {cartItem, setCartItem } = useGlobalContext();
	const { img, color, title, price, total_price, productId } = item;
	const [totalPrice, setTotalPrice] = useState(total_price);
	const userId = localStorage.getItem("userId");
	const serverQuantity = item.quantity;
	const [quantity, setQuantity] = useState(serverQuantity);
	const handleQuantity = (direction) => {
		if (quantity > 0) {
			if (direction === "up") {
				setQuantity((p) => p + 1);
			}
			// direction === "up" && setPrice(quantity * price);
			if (quantity >= 2)
				if (direction === "down") {
					setQuantity((p) => p - 1);
				}
			// direction === "down" && setPrice(quantity * price);
		}
	};
	const handleDelete = () => {
		deleteOneCart(userId, productId,);
		const filterItem = cartItem.filter(i => i.productId !== productId)
		setCartItem(filterItem)
	};
	useEffect(() => {
		addToCart({item}, (d) => {});
		setTotalPrice(price * quantity);
	}, [quantity, item, userId, price]);
	return (
		<div className="items">
			<p>
				<img src={img} alt="img" width={"50px"} />
			</p>
			<p>{title}</p>
			<p>{color}</p>
			<p className="quantity">
				<RiArrowUpSFill
					className="up"
					onClick={() => handleQuantity("up")}
				/>
				{`${quantity}x`}
				<RiArrowDownSFill
					className="down"
					onClick={() => handleQuantity("down")}
				/>
			</p>
			<p>{totalPrice}</p>
			<RiDeleteBin2Fill onClick={handleDelete} className="btn" />
		</div>
	);
};
export default Items;
