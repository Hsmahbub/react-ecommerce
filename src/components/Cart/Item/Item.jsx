import {
	RiArrowUpSFill,
	RiArrowDownSFill,
	RiDeleteBin2Fill,
} from "react-icons/ri";
import { useState } from "react";
import { useGlobalContext } from "../../../context";
import { Link } from "react-router-dom";
import {
	AddToCartApi,
	DeleteCartItemApi,
	GetCartApi,
} from "../../../Api Method/cart";
import "./item.scss";
import { useEffect } from "react";
const Items = ({ item }) => {
	const { cartItem, setCartItem } = useGlobalContext();
	const { img, color, title, price, total_price, size } = item;
	const productId = item._id;
	const [totalPrice, setTotalPrice] = useState(total_price);
	const [quantity, setQuantity] = useState(item.quantity);
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

	// delete handle
	const handleDelete = () => {
		DeleteCartItemApi(productId);
		const filterItem = cartItem.filter((i) => i._id !== productId);
		setCartItem(filterItem);
	};

	useEffect(() => {
		setTotalPrice(price * quantity);
		AddToCartApi({ productId, quantity, color, size }, (res) => {});
	}, [quantity, productId, price, size, color]);
	return (
		<div className="items">
			<p>
				<Link to={`/product/${item._id}`}>
					<img src={img} alt="img" width={"50px"} />
				</Link>
			</p>
			<p>
				<Link to={`/product/${item._id}`}>{title}</Link>
			</p>
			<p className="quantity">
				{`${quantity}x`}
			</p>
			<p>${totalPrice}</p>
			<RiDeleteBin2Fill onClick={handleDelete} className="btn" />
		</div>
	);
};
export default Items;
