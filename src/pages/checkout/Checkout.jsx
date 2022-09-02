/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GetCartApi } from "../../Api Method/cart";
import { CreateOrderApi } from "../../Api Method/order";
import { Footer, Navbar, Topheader } from "../../Components/index";
import { useGlobalContext } from "../../context";
import bkash from "../../utils/bkash.jpg";
import nagad from "../../utils/nagod.jpg";
import { toastObj } from "../../utils/toastObj";
import "./checkout.scss";
import {
	Payment,
	ProuductItem,
	SingelItem2,
	SingleItem,
} from "./SubComponents";

function Checkout() {
	const { handleModals, user, currentBilling } = useGlobalContext();
	const selectedItem = localStorage.getItem("selectedItem").split(",");
	const navigate = useNavigate();
	const name = currentBilling.name ? currentBilling.name : user.name;
	const email = currentBilling.email ? currentBilling.email : user.email;
	const phone = currentBilling.phone ? currentBilling.phone : user.phone;
	const address = currentBilling.address ? currentBilling.address : "";
	const cod =
		"https://png.pngtree.com/png-clipart/20210530/original/pngtree-the-cash-on-delivery-circle-design-png-image_6357123.jpg";
	const [productQuantity, setProductQuantity] = useState({
		totalquantity: 0,
		totalprice: 0,
	});
	const [orderProduct, setOrderProduct] = useState([]);
	// console.log(productQuantity.totalquantity);

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
			toast.warning("please add billing address", toastObj);
		if (!paymentMethod) {
			toast.warning("please select payment method", toastObj);
		} else if (paymentMethod !== "cod") {
			toast.warning("This method is currently unavailable", toastObj);
		} else {
			if (!Object.keys(currentBilling).length < 1 && paymentMethod) {
				handleModals("loading", true);
				CreateOrderApi(
					{
						BillingId: currentBilling._id,
						cartId: selectedItem,
					},
					(res) => {
						handleModals("loading", false);
						navigate("/order");
						window.location.reload()
					}
				);
			}
		}
	};
	useEffect(() => {
		GetCartApi((res) => {
			let buyable = [];
			selectedItem.forEach((i) => {
				const r = res.data.success.products.filter(
					(item) => item._id === i
				)[0];
				buyable.push(r);
			});
			buyable
				? setOrderProduct(buyable)
				: setOrderProduct(res.data.success.products);
		});
	}, []);

	// set current billing on localStorage
	useEffect(() => {
		localStorage.setItem("currentBillingId", currentBilling._id);
	}, [currentBilling]);
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
									{ img: cod, name: "cod" },
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
