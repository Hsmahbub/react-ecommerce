import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetOrderApi } from "../../Api Method/order";
import { Footer, Navbar } from "../../Components/index";
import { useGlobalContext } from "../../context";
import "./orderpage.scss";
import { useLoaderData } from 'react-router-dom';

function OrderPage() {
	// const [orderdProduct, setOrderdProduct] = useState([]);
	const { data } = useLoaderData()


	return (
		<div className="orderPage">
			<div className="order">
				<h1>Orders</h1>
				<div className="order-list">
					{data && data.map((item) => (
						<div className="order-item" key={item._id}>
							<div className="img">
								<Link to={`/product/${item.productId}`}>
									<img src={item.productId?.img} alt={item?.productId?.title} />
								</Link>
							</div>
							<div className="details">
								<p>Order Id:{item._id}</p>
								<p>
									<Link to={`/product/${item.productId._id}`}>
										{item.productId?.title}
									</Link>
								</p>
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
								{item?.billingId && <p>
									shipping:{item?.billingId?.address},
									{item?.billingId?.address?.postcode}
								</p>}
								<p>placed on : {new Date(item.createdAt).toLocaleString()}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default OrderPage;
