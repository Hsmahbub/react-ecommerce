/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";
import { getCart } from "../../Database Managment/cart";
import { FaEnvelope, FaSearchLocation, FaPhone } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Footer, Navbar, Topheader } from "../../Components/index";
import bkash from "../../utils/bkash.jpg";
import nagad from "../../utils/nagod.jpg";
import "./checkout.scss";
import { useGlobalContext } from "../../context";
import {
	SingleItem,
	SingelItem2,
	Payment,
	ProuductItem,
} from "./SubComponents";
import { toast } from "react-toastify";
import { toastObj } from "../../utils/toastObj";

function Checkout() {
	const { handleModals, user, currentBilling } = useGlobalContext();
	const name = currentBilling.name ? currentBilling.name : user.name;
	const email = currentBilling.email ? currentBilling.email : user.email;
	const phone = currentBilling.phone ? currentBilling.phone : user.phone;
	const address = currentBilling.address ? currentBilling.address : "";
	const location = useLocation();
	const productId = location.pathname.split("/")[2];
	const [productQuantity, setProductQuantity] = useState({
		totalquantity: 0,
		totalprice: 0,
	});
	const [orderProduct, setOrderProduct] = useState([]);
	console.log(productQuantity.totalquantity);
	const [paymentMethod, setPaymentMethod] = useState("");

	// total item and total price
	let totalprice = 0;
	let totalquantity = 0;
	for (let i = 0; i < orderProduct.length; i++) {
		const element = orderProduct[i];
		let price = element.price * element.quantity;
		totalprice = price + totalprice;
		totalquantity = totalquantity + element.quantity;
	}
	useEffect(() => {
		setProductQuantity({ totalquantity, totalprice });
	}, [totalprice, totalquantity]);

	// payment mehtodh
	const handlePaymentMethod = (name) => {
		const bkash = document.getElementById("bkash");
		const nagad = document.getElementById("nagad");
		setPaymentMethod(name);
		if (name === "bkash") {
			bkash.style.transform = "scale(1.1)";
			nagad.style.transform = "scale(0.9)";
		} else {
			nagad.style.transform = "scale(1.1)";
			bkash.style.transform = "scale(0.9)";
		}
	};
	//place order
	const handlePlaceOrder = () => {
		Object.keys(currentBilling).length < 1 &&
			toast.warning("please add billing address", toastObj);
		!paymentMethod &&
			toast.warning("please select payment method", toastObj);
		if (!Object.keys(currentBilling).length < 1 && paymentMethod) {
			
		}
	};

	useEffect(() => {
		getCart((res) => {
			const buyable = res.products.filter(
				(item) => item.productId === productId
			);
			buyable ? setOrderProduct(buyable) : setOrderProduct(res.products);
		});
	}, [productId]);
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
					{/* billing product details  */}
					<div className="bill-product-details">
						{orderProduct &&
							orderProduct.map((item) => (
								<ProuductItem product={item} key={item._id} />
							))}
						<hr />
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
									first={`items Total (${productQuantity.totalquantity})`}
									second={`$${productQuantity.totalprice}`}
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
								]}
								handlePaymentMethod={handlePaymentMethod}
							/>
							<div className="total">
								<p>Total</p>
								<p>{`$${productQuantity.totalprice}`}</p>
							</div>
						</div>
					</div>
				</div>
				<div className="order-btn ">
					<button className="place-order" onClick={handlePlaceOrder}>
						PLACE ORDER
					</button>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Checkout;
