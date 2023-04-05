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
			<div className="page__index">
				<a href="#">Home </a> &gt;&gt; <a href="#">Page </a>&gt;&gt;
				<a href="#">Shop </a>&gt;&gt;<a href="#">Cart</a>
			</div>
			<Cart />
		</div>
	);
}
export default Carts;