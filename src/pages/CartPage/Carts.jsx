/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import { useGlobalContext } from "../../context";
import {
	Footer,
	Navbar,
	Topheader,
	Cart
} from "../../Components/index";
import "./cart.css";
function Carts() {
	return (
		<div>
			<Topheader />
			<Navbar />
			<div className="cart section__padding">
				<div className="page__index">
					<a href="#">Home </a> &gt;&gt; <a href="#">Page </a>&gt;&gt;
					<a href="#">Shop </a>&gt;&gt;<a href="#">Cart</a>
				</div>
				<Cart />
			</div>
			<Footer />
		</div>
	);
}
export default Carts;
				// {/* <div className="couponAndVoucher">
				// 	<div className="coupon">
				// 		<h3>USE COUPON CODE</h3>
				// 		<div className="couponInput">
				// 			<form>
				// 				<label htmlFor="coupon">
				// 					Enter your Counpon here
				// 				</label>
				// 				<br />
				// 				<div className="inp">
				// 					<div style={{ flex: 0.8 }}>
				// 						<input
				// 							className="border"
				// 							type="text"
				// 							name="coupon"
				// 							placeholder="Enter your coupon here"
				// 						/>
				// 					</div>
				// 					<button
				// 						style={{
				// 							flex: 0.2,
				// 							marginBottom: ".5rem",
				// 						}}
				// 						type="button"
				// 						className="continueBtn"
				// 					>
				// 						APPLY
				// 					</button>
				// 				</div>
				// 			</form>
				// 		</div>
				// 		<div className="shippingAvail">
				// 			<h3>SHIPPING AVAILABILITY</h3>
				// 			<form>
				// 				<label htmlFor="country">Select country</label>
				// 				<br />
				// 				<select name="country" id="country">
				// 					<option value="Viet Nam">Viet Nam</option>
				// 					<option value="Bangladesh">
				// 						Bangladesh
				// 					</option>
				// 					<option value="India">India</option>
				// 					<option value="Pakisthan">Pakisthan</option>
				// 					<option value="Soudi Arabia">
				// 						Soudi Arabia
				// 					</option>
				// 				</select>
				// 				<br />
				// 				<label htmlFor="state">Select state</label>
				// 				<br />
				// 				<select name="state" id="state">
				// 					<option value="TPHCM">TP.HCM</option>
				// 				</select>
				// 				<br />
				// 				<label htmlFor="postCode">Postcode/Zip</label>
				// 				<br />
				// 				<input
				// 					type="text"
				// 					name="postCode"
				// 					placeholder="Postcode/Zip"
				// 				/>
				// 			</form>
				// 			<button className="uptTotal updateBtn">
				// 				UPDATE TOTALS
				// 			</button>
				// 		</div>
				// 	</div>
				// 	<div className="voucher">
				// 		<h3>USE GIFT VOUCHER</h3>
				// 		<div className="inputVoucher">
				// 			<form>
				// 				<label htmlFor="coupon">
				// 					Enter your Counpon here
				// 				</label>
				// 				<br />
				// 				<div className="inp">
				// 					<div style={{ flex: 0.8 }}>
				// 						<input
				// 							className="border"
				// 							type="text"
				// 							name="coupon"
				// 							placeholder="Enter your coupon here"
				// 						/>
				// 					</div>
				// 					<button
				// 						style={{
				// 							flex: 0.2,
				// 							marginBottom: ".5rem",
				// 						}}
				// 						type="button"
				// 						className="continueBtn"
				// 					>
				// 						APPLY
				// 					</button>
				// 				</div>
				// 			</form>
				// 		</div>
				// 		<div className="cartCalc">
				// 			<h3>Shopping cart calculation</h3>
				// 			<div className="calcBox">
				// 				<div className="calwrap">
				// 					<div>
				// 						<p>Subtotal</p>
				// 						<p>${}</p>
				// 					</div>
				// 					<div>
				// 						<p>Coupon</p>
				// 						<p>-$50</p>
				// 					</div>
				// 					<div>
				// 						<p>Shipping</p>
				// 						<p>Free Shipping</p>
				// 					</div>
				// 				</div>
				// 				<div className="foot">
				// 					<p>Total</p>
				// 					<p>$400</p>
				// 				</div>
				// 			</div>
				// 			<div className="proccess">
				// 				<button className="continueBtn">
				// 					Procced to checkout
				// 				</button>
				// 			</div>
				// 		</div>
				// 	</div>
				// </div> */}