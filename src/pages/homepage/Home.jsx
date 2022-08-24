import React from "react";
import "./home.scss";
import { useGlobalContext } from "../../context";
import { Loading } from "../../Components/Modals/index";
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
	const { products, user } = useGlobalContext();
	const topProduct = products.slice(0, 16);
	const featureProduct = products.slice(20, 50);
	return (
		<div className="home">
			<Topheader />
			<Navbar
				signup={!user ? "signup" : null}
				login={!user ? "login" : null}
				logout={user ? "logout" : null}
			/>
			<Sliders />
			<TopProduct products={topProduct} />
			{/* banner */}
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

			{/* product */}
			{!products ? <Loading /> : <Feature products={featureProduct} />}
			<Subscription />
			<Footer />
		</div>
	);
}

export default Home;
