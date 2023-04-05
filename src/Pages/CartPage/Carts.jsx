/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import { useGlobalContext } from "../../context";
import {
	Cart
} from "../../Components/index";
import "./cart.css";
function Carts() {
	return (
		<div className="cart section__padding">
			<h1>Carts</h1>
			<Cart />
		</div>
	);
}
export default Carts;