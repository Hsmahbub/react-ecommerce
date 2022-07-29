import { useGlobalContext } from "../../context";
import SingleCart from "./CartItem";
const CartComponent = () => {
	const { cart } = useGlobalContext();

	return (
		<div className="cart-list">
			<div className="row" style={{ borderTop: "1px solid gray" }}>
				<div className="col">Product</div>
				<div className="col">Quantity</div>
				<div className="col">Price</div>
				<div className="col">Total</div>
			</div>
			<div>
				{cart.length === 0 ? (
					<img
						src="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif"
						alt="loading"
						width="500px"
					/>
				) : (
					cart.line_items.map((item) => <SingleCart item={item} key={item.id} />)
				)}
			</div>
			<div className="row btn-col">
				<span className="updateBtn">UPDATE CART</span>
				<span className="continueBtn">CONTUNUE SHOPPING</span>
			</div>
		</div>
	);
};
export default CartComponent;
