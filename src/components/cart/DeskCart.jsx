import { useGlobalContext } from "../../context";
import SingleCart from "./CartItem";
const CartComponent = () => {
	const { dynamicData } = useGlobalContext();
	return (
		<div className="cart-list">
			<div className="row" style={{ borderTop: "1px solid gray" }}>
				<div className="col">Product</div>
				<div className="col">Quantity</div>
				<div className="col">Price</div>
				<div className="col">Total</div>
			</div>
			{dynamicData.map((item) => (
				<SingleCart item={item} />
			))}
			<div className="row btn-col">
				<span className="updateBtn">UPDATE CART</span>
				<span className="continueBtn">CONTUNUE SHOPPING</span>
			</div>
		</div>
	);
};
export default CartComponent;
