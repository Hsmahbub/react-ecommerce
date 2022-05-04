import React from "react";
import "./subscription.css";
import img1 from "./brand1.png";
import img2 from "./brand2.png";
import img3 from "./brand3.png";
import img4 from "./brand4.png";
const images = [img1, img2, img3, img4];

function subscription() {
	return (
		<div className="subscription">
			<div className="innerSubscription">
				<div className="form">
					<div className="form__text">
						<h3>Get Out Special Discount</h3>
						<p>
							Donec eu tristique felis. Duis augue mi, auctor ut
							purus et, dignissim aliquet quam. register your
							email for news and special offers
						</p>
					</div>
					<div className="form__input">
						<div className="input">
							<input type="email" placeholder="Enter your email"/>
						</div>
						<div className="btn">
							<button type="button">GET COUPON NOW</button>
						</div>
					</div>
				</div>
				<div className="brand__Logo">
					{images.map((item, index) => (
						<div className="brand"  key={index} >
							<img src={item} alt={index}/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default subscription;
