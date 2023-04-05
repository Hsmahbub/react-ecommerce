/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { CreateOrderApi } from "../../Api Method/order";
import { useGlobalContext } from "../../context";
import bkash from "../../utils/bkash.jpg";
import { customIterator } from "../../utils/functions";
import nagad from "../../utils/nagod.jpg";
import { toastObj } from "../../utils/toastObj";
import "./checkout.scss";
import {
	Payment,
	ProuductItem,
	SingelItem2,
	SingleItem,
} from "./SubComponents";
import { useLoaderData } from "react-router-dom";
function Checkout() {
	const { data, arrayOfId, totalPrice, totalItems } = useLoaderData()
	const { handleModals, user, currentBilling } = useGlobalContext();
	const navigate = useNavigate();
	const name = currentBilling.name ? currentBilling.name : user.name;
	const email = currentBilling.email ? currentBilling.email : user.email;
	const phone = currentBilling.phone ? currentBilling.phone : user.phone;
	const address = currentBilling.address ? currentBilling.address : "";
	const cod =
		"https://png.pngtree.com/png-clipart/20210530/original/pngtree-the-cash-on-delivery-circle-design-png-image_6357123.jpg";
	// total item and total price

	// payment mehtodh
	const [paymentMethod, setPaymentMethod] = useState("");
	const handlePaymentMethod = (name) => {
		const prev = document.getElementById(paymentMethod);
		const current = document.getElementById(name);
		setPaymentMethod(name);
		current.style.transform = "scale(1.1)";
		paymentMethod && (prev.style.transform = "scale(0.9)");
	};
	//place order
	const handlePlaceOrder = () => {
		Object.keys(currentBilling).length < 1 &&
			toast.warning("Please add billing address", toastObj);
		if (!paymentMethod) {
			toast.warning("Please select payment method", toastObj);
		} else if (paymentMethod !== "cod") {
			toast.warning("This method is currently unavailable", toastObj);
		} else {
			if (!Object.keys(currentBilling).length < 1 && paymentMethod) {
				handleModals("loading", true);
				CreateOrderApi(
					{
						billingId: currentBilling._id,
						cartId: arrayOfId,
					},
					(res) => {
						console.log(res.data)
						handleModals("loading", false);
						navigate(`/order-confirm/${res?.data?._id}/${res?.data?.createdAt}`)
						toast.warning("Thanks for Shopping with us", toastObj);
					}
				);
			}
		}
	};
	// console.log(data.reduce((a, b) => (a.total_price.toString() + b.total_price.toString())))
	// set current billing on localStorage
	useEffect(() => {
		localStorage.setItem("currentBillingId", currentBilling._id);
	}, [currentBilling]);

	return (

		<div className="checkout section__padding">
			<h1>Checkout</h1>
			<div className="billings">
				{/* billing product details  */}
				<div className="bill-product-details">
					{data &&
						data.map((item, ind) => (
							<ProuductItem product={item} key={ind} />
						))}
				</div>
				<div className="billing-details">
					{/* billing details  */}
					<div className="bill">
						<h2>Shipping {"&"} Billing </h2>
						<div className="address">
							<div className="location-edit">
								<p>
									<span>
										<GrMapLocation />
									</span>
									<span>{name}</span>
								</p>
								<button
									onClick={() =>
										handleModals("shipping", true)
									}
								>
									ADD
								</button>
							</div>
							<div className="shipping">{address}</div>
						</div>
						<SingelItem2 icon={<FaEnvelope />} text={email} />
						<SingelItem2 icon={<FaPhone />} text={phone} />
						<div className="subtotal">
							<h2>Order Summary</h2>
							<SingleItem
								first={`items Total (${totalItems})`}
								second={`$${totalPrice}`}
							/>
							<SingleItem
								first="Shipping Free"
								second="Free"
							/>
						</div>
						<Payment
							option={[
								{ img: bkash, name: "bkash" },
								{ img: nagad, name: "nagad" },
								{ img: cod, name: "cod" },
							]}
							handlePaymentMethod={handlePaymentMethod}
						/>
						<div className="total">
							<p>Total</p>
							<p>{`$${totalPrice}`}</p>
						</div>
					</div>
					<div className="order-btn ">
						<button
							className="place-order"
							onClick={handlePlaceOrder}
						>
							PLACE ORDER
						</button>
					</div>
				</div>
			</div>
		</div>


	);
}

export default Checkout;
