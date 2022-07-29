import React from "react";
import "./home.scss";
import { useGlobalContext } from "../../context";
import {
	Navbar,
	Topheader,
	Sliders,
	Feature,
	Subscription,
	Footer,
	TopProduct,
} from "../../Components/index";

function Home() {
	const { products } = useGlobalContext();
	return (
		<div className="home">
			<Topheader />
			<Navbar link={"signup"} link2={"login"} logout={"logout"} />
			<Sliders />
			<TopProduct />
			<div className="homepage-banner section__padding">
				<div className="img">
					<img
						src={
							"https://camo.envatousercontent.com/2bd19a38fb880b9b38a718e987a4b95ce14e45a1/68747470733a2f2f736b61742e74662f696d616765732f777261706b69742d646573632f666c6173682d73616c652d6d696e2e676966"
						}
						alt="serviceImage"
					/>
				</div>
			</div>

			{!products ? (
				<img
					style={{ display: "block", width: "500px", margin: "auto" }}
					src="https://jb-power.in/uploads/images/loader_image/1723729837075479.gif"
					alt="loading"
				/>
			) : (
				<Feature products={products} />
			)}

			<Subscription />
			<Footer />
		</div>
	);
}

export default Home;
