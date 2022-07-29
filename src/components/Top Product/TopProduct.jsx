import React from "react";
import "./top-product.scss";
import { useGlobalContext } from "../../context";
import { Product } from "../index";
function TopProduct() {
	const { products } = useGlobalContext();
	return (
		<div className="top-product">
			<h1>TOP PRODUCTS</h1>
			<h6>Best product from our commerce</h6>
			<div className="top-products-list">
				<div className="wrapper">
					{!products ? (
						<img src="https://jb-power.in/uploads/images/loader_image/1723729837075479.gif" alt="loading"/>
					) : (
						products.map((item) => (
							<div key={item._id}>
								<Product item={item} />
							</div>
						))
					)}
				</div>
			</div>
		</div>
	);
}

export default TopProduct;
