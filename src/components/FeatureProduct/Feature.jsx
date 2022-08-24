import React from "react";
import "./feature.scss";
import { Product } from "../index";
function Feature({ products }) {
	return (
		<div className="section__padding feature-product">
			<div className="inner-feature-product">
				<div className="description">
					<h1>FEATURED PRODUCTS</h1>
					<h6>Newest trends from top brands</h6>
				</div>
				<div className="product-list">
					<div className="wrapper">
						{products.map((item) => (
							<div key={item._id}>
								<Product item={item} />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Feature;
