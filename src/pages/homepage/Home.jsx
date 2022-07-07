import React from "react";
import "./home.css";
import { useGlobalContext } from "../../context";
// import product from "../data";
import {
	Navbar,
	Topheader,
	Slider,
	Product,
	Feature,
	Subscription,
	Footer,
} from "../../components/index";
import img1 from "./homepage-shop.png";
import img2 from "./homepage-shop (1).png";
import img3 from "./homepage-shop (2).png";
import img4 from "./homepage-shop (3).png";
import img7 from "./img1 (1).png";
import img5 from "./img1 (2).png";
import img6 from "./img1 (3).png";
const img = [img1, img2, img3, img4];
const images = [img6, img5, img7];

function Home() {
	const { products } = useGlobalContext()
	return (
		<div className="home">
			<Topheader />
			<Navbar />
			<Slider />
			<div className="description">
					<h1>BEST SELLERS</h1>
					<span>The best productions from us</span>
					<p>
						Lorem ipsum dolor sit amet consectetur,
						<br /> adipisicing elit. Maxime corporis quod, sed nulla
						harum recusandae.
					</p>
				</div>
			<div className="section__padding seller-text-and-product">
				<>
					{products.map((item) => (
						<div key={item.id} >
							<Product
								name={item.name}
								price={item.price.formatted_with_symbol}
								img={item.image.url}
								id={item.id}
							/>
						</div>
					))} 
				</>
			</div>
			<div className="service">
				{img.map((item, index) => (
					<div className="img" key={index}>
						<img src={item} alt="serviceImage" />
					</div>
				))}
			</div>
			<div className="service">
				{images.map((item, index) => (
					<div className="img" key={index}>
						<img src={item} alt="serviceImage" />
					</div>
				))}
			</div>
			<Feature />
			<Subscription />
			<Footer />
		</div>
	);
}

export default Home;
