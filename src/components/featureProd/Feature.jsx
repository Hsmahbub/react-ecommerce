import React from "react";
import "./feature.css";
import { Product } from "../index";
import data from "../../data";
import { useGlobalContext } from "../../context";

function Feature() {
	const { products } = useGlobalContext();
	return (
		<div className="section__padding feature__product">
			<div className="innerFeatureProd">
				<div className="descript title">
					<h1>FEATURED PRODUCTS</h1>
					<span>Newest trends from top brands</span>
				</div>
				<div className="productList">
					{products.map((item, index) => (
						<div key={index}>
							<Product
								name={item.name}
								price={item.price.formatted_with_symbol}
								img={item.image.url}
								key={index}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Feature;
