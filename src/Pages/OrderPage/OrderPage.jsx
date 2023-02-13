import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetOrderApi } from "../../Api Method/order";
import { Footer, Navbar } from "../../Components/index";
import { useGlobalContext } from "../../context";
import "./orderpage.scss";

function OrderPage() {
	const [orderdProduct, setOrderdProduct] = useState([]);
	const { billings, products } = useGlobalContext();
	useEffect(() => {
		GetOrderApi((res) => {
			console.log(res.data);
			if (res.status === 200) {
				// main response mapping
				const orderData = [];
				res?.data?.forEach((r) => {
					// billing mapping
					let billing = {};
					let product = {};
					billings?.forEach((b) => {
						if (b._id === r.billingId) {
							billing = b;
						}
					});
					// product mapping
					products.forEach((p) => {
						if (p._id === r.productId) {
							product = p;
						}
					});
					// process order data
					const createTime = new Date(r.createdAt);
					const localFormat = createTime.toLocaleString();
					delete r.createdAt;
					const { _id, createdAt, updatedAt, ...rest } = billing;
					const { title, img, desc } = product;
					orderData.push({
						...r,
						...rest,
						createdAt:localFormat,
						title,
						img,
						desc,
					});
				});
				setOrderdProduct(orderData);
			}
		});
	}, [billings, products]);
	return (
		<div className="orderPage">
			<Navbar />
			<div className="order">
				<h1>Order</h1>
				<div className="order-list">
					{orderdProduct.map((item) => (
						<div className="order-item" key={item._id}>
							<div className="img">
								<Link to={`/product/${item.productId}`}>
									<img src={item.img} alt={item.title} />
								</Link>
							</div>
							<div className="details">
								<p>Order Id:{item._id}</p>
								<p>
									<Link to={`/product/${item.productId}`}>
										{item.title}
									</Link>
								</p>
								{/* <p>
									<Link to={`/product/${item.productId}`}>
										{item.desc}
									</Link>
								</p> */}
								<p>
									<span>price:${item.price},</span>
									<span>quantity:{item.quantity},</span>
									{item.color && (
										<span>color:{item.color},</span>
									)}
									{item.size && (
										<span>size:{item.size},</span>
									)}
									<span>total_price:${item.total_price}</span>
								</p>
								<p></p>
								<p></p>
							</div>
							<div className="status">
								<p>status: {item.status}</p>
								<p>
									{/* shipping:{item.address.},
									{item.address.postcode} */}
								</p>
								<p>placed on : {item.createdAt}</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="foo">
				<Footer />
			</div>
		</div>
	);
}

export default OrderPage;
