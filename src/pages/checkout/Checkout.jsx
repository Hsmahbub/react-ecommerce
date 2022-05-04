/* eslint-disable jsx-a11y/anchor-is-valid */
import { Footer, Navbar, Topheader } from "../../components";
import "./checkout.css";

const Inputdata = ({ labelValue, type, name }) => {
	return (
		<>
			<label htmlFor={name}>{labelValue}</label>
			<br />

			<input type={type} name={name} />
		</>
	);
};
const Inputdata2 = ({ labelValue, type, name, placeholder }) => {
	return (
		<div className={name}>
			<label htmlFor={name}>{labelValue}</label>
			<br />
			<input type={type} name={name} placeholder={placeholder} />
		</div>
	);
};

const SingleItem = ({ first, second }) => {
	return (
		<div className="single-item">
			<p>{first}</p>
			<p>{second}</p>
		</div>
	);
};

const Payment = ({ name, labelValue }) => {
	return (
		<div className={name}>
			<input type="checkbox" name={name} />
			<label htmlFor={name}>{labelValue}</label>
		</div>
	);
};

function Checkout() {
	return (
		<div>
			<Topheader />
			<Navbar />
			<div className="checkout section__padding">
				<div className="page__index">
					<a href="#">Home </a> &gt;&gt; <a href="#">Page </a>&gt;&gt;
					<a href="#">Shop </a>&gt;&gt;<a href="#">Checkout</a>
				</div>

				<div className="billings">
					<div className="billing-input">
						<h1>Billing Details</h1>
						<div className="form-data">
							<form>
								<div className="nameData">
									<div className="fname">
										<Inputdata
											name="fname"
											type="text"
											labelValue="First Name*"
										/>
									</div>
									<div className="lname">
										<Inputdata
											name="lname"
											type="text"
											labelValue="Last Name*"
										/>
									</div>
								</div>
								<br />
								<div className="country">
									<label htmlFor="country">Country*</label>
									<br />
									<select name="country" id="country">
										<option value="Bangladesh">
											Bangladesh
										</option>
										<option value="India">India</option>
										<option value="Pakisthan">
											Bangladesh
										</option>
										<option value="Turkey">Turkey</option>
									</select>
								</div>
								<Inputdata2
									labelValue="Company Name"
									type="text"
									name="companyName"
								/>
								<br />
								<Inputdata2
									labelValue="Address*"
									type="text"
									name="address"
									placeholder="Street address"
								/>
								<br />
								<Inputdata2
									labelValue="Postcode/Zip*"
									type="text"
									name="postcode"
									placeholder="Postcode/Zip"
								/>
								<br />
								<Inputdata2
									labelValue="Town/City*"
									type="text"
									name="townCity"
									placeholder="Town/City"
								/>
								<br />
								<div className="emailAndPhone ">
									<div className="email">
										<Inputdata
											name="email"
											type="email"
											labelValue="Email*"
										/>
									</div>
									<div className="phones">
										<Inputdata
											name="phone"
											type="number"
											labelValue="Phone*"
										/>
									</div>
								</div>

								<div className="creataAccount">
									<a href="#">Create an account?</a>
								</div>
							</form>
						</div>
					</div>
					<div className="billing-details">
						<div className="bill">
							<div className="product-details">
								<h2>Your Order</h2>
								<div className="pTiltle">
									<p>Product</p>
									<p>Total</p>
								</div>
								<div className="pNameAndPrice">
									<SingleItem
										first="Casual men wearing cool shoe x1"
										second="$120"
									/>
									<SingleItem
										first="Casual men wearing cool shoe x1"
										second="$200"
									/>
								</div>
								<div className="subtotalAndShipping">
									<SingleItem
										first="Subtotal"
										second="$400"
									/>
									<SingleItem
										first="Shipping"
										second="Free Shipping"
									/>
								</div>
								<div className="total">
									<p>Total</p>
									<p>$400</p>
								</div>
							</div>
						</div>
						<div className="payments">
							<div className="payment-methods">
								<Payment
									name="bank-transfer"
									labelValue="Direct Bank Transfer"
								/>
								<div className="bank-pay-details">
									<p>
										Make your payment directly into our bank
										account.Please use your Order ID as the
										payment reference.Your order wont't be
										shipped until the funds have cleared in
										our account.
									</p>
								</div>
								<Payment
									name="cheque-pay"
									labelValue="Cheque Payment"
								/>
								<Payment name="paypal" labelValue="Paypal" />
							</div>
						</div>
						<div className="order-btn ">
							<button className="continueBtn">PLACE ORDER</button>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Checkout;
