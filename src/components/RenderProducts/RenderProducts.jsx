import React from "react";
import { Loading, Product } from "../index";
import "./renderproduct.scss";

function RenderProducts({ products, sectionTitle, sectionSubtitle }) {
	return (
		<section className="section__padding feature-product">
			<div className="inner-feature-product">
				<div className="description">
					<h1>{sectionTitle}</h1>
					<h6>{sectionSubtitle}</h6>
				</div>
				<div
					className="product-list"
					style={{
						backgroundColor: !products.length > 0 && "#9B9EA6",
					}}
				>
					{!products.length > 0 ? (
						<Loading />
					) : (
						<div className="wrapper">
							{products.map((item) => (
								<div key={item._id}>
									<Product item={item} />
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</section>
	);
}

export default RenderProducts;
