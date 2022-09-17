import React from "react";
import Slider from "react-slick";
import "./slider.scss";
function Sliders() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		dotsClass: "slick-dots",
		autoplay: true,
	};
	return (
		<div className="slider_container">
			<Slider {...settings}>
				<div className="slide">
					<img

						src={
							"https://img.freepik.com/free-psd/horizontal-banner-template-big-sale-with-woman-shopping-bags_23-2148786755.jpg?w=2000"
						}
						alt="slider-1"
					/>
				</div>
				<div className="slide">
					<img
						src={
							"https://img.freepik.com/free-psd/horizontal-banner-template-online-fashion-sale_23-2148585405.jpg?w=2000"
						}
						alt="slider-2"
					/>
				</div>
				<div className="slide">
					<img
						src={
							"https://img.freepik.com/free-psd/horizontal-banner-online-fashion-sale_23-2148585404.jpg?w=2000"
						}
						alt="slider-3"
					/>
				</div>
			</Slider>
		</div>
	);
}

export default Sliders;
