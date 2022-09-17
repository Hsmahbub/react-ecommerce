import React from "react";
import "./home.scss";
import { useGlobalContext } from "../../context";
import { Loading } from "../../Components/Modals/index";
import {
	Navbar,
	Topheader,
	Sliders,
	RenderProducts,
	Subscription,
	Footer,
} from "../../Components/index";

function Home() {
	const { products } = useGlobalContext();
	const topProduct = products.slice(1, 16);
	const featureProduct = products.slice(20, 50);
	return (
		<div className="home">
			<Topheader />
			<Navbar />
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
			<Footer />
		</div>
	);
}

export default Home;
