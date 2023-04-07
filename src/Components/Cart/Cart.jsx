import { useGlobalContext } from "../../context";
import Items from "./Item/Item";
import "./cart.scss";
import { DeleteCartItemApi } from "../../Api Method/cart";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { toastObj } from "../../utils/toastObj";

function Carts() {
	const [selectedItem, setSelectedItem] = useState([]);
	const { cartData, setCartData } = useGlobalContext()
	const navigate = useNavigate();
	const isCart = cartData?.length > 0;
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

	return (
		<div className="cart-item">
			<div className="wrapper">
				{!cartData?.length? (
					<h3>You have no cart</h3>
				) : (
					cartData.map((item) => (
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
					disabled={cartData?.length}
					style={{ cursor: cartData?.length && "not-allowed" }}
					onClick={handleCheckout}
				>
					Checkout
				</button>
			</div>
		</div>
	);
}

export default Carts;
