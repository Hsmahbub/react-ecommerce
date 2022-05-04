import React from "react";
import "./feature.css";
import { Product } from "../index";
import data from "./data";

function Feature() {
	return (
		<div className="section__padding feature__product">
			<div className="innerFeatureProd">
				<div className="descript title">
					<h1>FEATURED PRODUCTS</h1>
					<span>Newest trends from top brands</span>
				</div>
				<div className="productList">
					{data.map((item, index) => (
						<Product
							name={item.name}
							price={item.price}
							key={index}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Feature;
