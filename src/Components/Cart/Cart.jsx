import { useGlobalContext } from "../../context";
import Items from "./Item/Item";
import "./cart.scss";
import { DeleteCartItemApi } from "../../Api Method/cart";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { toastObj } from "../../utils/toastObj";
import { customIterator } from "../../utils/functions";

function Carts() {
	const [selectedItem, setSelectedItem] = useState([]);
	const navigate = useNavigate();
	const { cartData, products, setCartData } = useGlobalContext();
	const [cartItems, setCartItems] = useState([]);
	const isCart = cartData.length > 0;
	const isSelected = selectedItem.length > 0;
	// delete handle
	const handleDelete = () => {
		DeleteCartItemApi("all", (res) => {
			if (res.status === 204) {
				setCartData([]);
			}
		});
	};
	const handleSelect = (e) => {
		if (selectedItem.findIndex((i) => i === e.target.value) > -1) {
			let item = selectedItem.filter((i) => i !== e.target.value);
			setSelectedItem(item);
		} else {
			setSelectedItem((p) => [...p, e.target.value]);
		}
	};
	const handleCheckout = () => {
		!isSelected && toast.warning("Please select an item", toastObj);
		isSelected &&
			navigate(
				`/checkout/${selectedItem.toString().replace(/,/gi, "_")}`
			);
		window.scrollTo(0, 0);
	};
	// data processing
	useEffect(() => {
		const data = [];
		cartData.forEach((c) => {
			let product = customIterator(products, c.productId);
			products.forEach((p) => {
				if (c.productId === p._id) {
					product = p;
				}
			});
			const { createdAt, updatedAt, _id, ...rest } = product;
			data.push({
				...rest,
				...c,
			});
		});
		setCartItems(data);
	}, [cartData, products]);
	
	return (
		<div className="cart-item">
			<div className="wrapper">
				{cartItems.length === 0 ? (
					<h3>You have no cart</h3>
				) : (
					cartItems.map((item) => (
						<div key={item._id}>
							<Items item={item} handleSelect={handleSelect} />
						</div>
					))
				)}
			</div>
			<div className="update-and-clear">
				<button
					disabled={!isCart}
					style={{ cursor: !isCart && "not-allowed" }}
					onClick={handleDelete}
				>
					Clear
				</button>
				<button
					disabled={cartData.length === 0}
					style={{ cursor: cartData.length === 0 && "not-allowed" }}
					onClick={handleCheckout}
				>
					Checkout
				</button>
			</div>
		</div>
	);
}

export default Carts;
