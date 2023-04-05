import React from "react";
import "./home.scss";
import { useGlobalContext } from "../../context";
import { Loading } from "../../Components/Modals/index";
import {
	Sliders,
	RenderProducts,
	Subscription,
} from "../../Components/index";
import { useLoaderData } from "react-router-dom";

function Home() {
	const { products } = useGlobalContext();
	const { data } = useLoaderData()
	const topProduct = data?.slice(1, 16);
	const featureProduct = data?.slice(20, 50);
	return (
		<div className="home">
			<Sliders />
			<RenderProducts
				products={topProduct}
				sectionSubtitle={"The best products of our store"}
				sectionTitle=" Top Product"
			/>

			{/*fetured product */}
			<RenderProducts
				products={featureProduct}
				sectionSubtitle={"Get your product"}
				sectionTitle=" Featured Product"
			/>
			<Subscription />
		</div>
	);
}

export default Home;
