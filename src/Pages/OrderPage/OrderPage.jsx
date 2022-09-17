import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetOrderApi } from "../../Api Method/order";
import { Footer, Navbar } from "../../Components/index";
import "./orderpage.scss";

function OrderPage() {
	const [orderdProduct, setOrderdProduct] = useState([]);
	useEffect(() => {
		GetOrderApi((res) => {
			if (res.data) {
				res.data.success && setOrderdProduct(res.data.success.orders);
			}
		});
	}, []);
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
									shipping:{item.address.address},
									{item.address.postcode}
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
