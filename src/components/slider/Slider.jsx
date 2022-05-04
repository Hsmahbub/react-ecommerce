import React from "react";
import "./slider.css";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { useState, useEffect } from "react";

const data = [
	{
		img: `https://img.freepik.com/free-psd/horizontal-banner-template-big-sale-with-woman-shopping-bags_23-2148786755.jpg?w=2000`,
	},
	{
		img: "https://img.freepik.com/free-psd/horizontal-banner-template-online-fashion-sale_23-2148585405.jpg?w=2000",
	},
	{
		img: "https://img.freepik.com/free-psd/horizontal-banner-online-fashion-sale_23-2148585404.jpg?w=2000",
	},
];

function Slider() {
	const [slideIndex, setSlideIndex] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setSlideIndex((prevState) => (prevState > 0 ? prevState - 1 : 2));
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	const handleClick = (direction) => {
		if (direction === "right") {
			setSlideIndex((prevState) => (prevState > 0 ? prevState - 1 : 2));
			console.log(slideIndex);
		} else {
			setSlideIndex((prevState) => (prevState < 2 ? prevState + 1 : 0));
			console.log(slideIndex);
		}
	};
	return (
		<div className="slider_container">
			<div
				className="arrow"
				style={{ left: "20px" }}
				onClick={() => handleClick("left")}
			>
				<AiOutlineArrowLeft />
			</div>

			<div
				className="wrapper"
				style={{ transform: `translateX(${slideIndex * -100}vw)` }}
			>
				{data.map((item, index) => (
					<div className="slide" key={index}>
						<div className="imgContainer">
							<img src={item.img} alt={`item ${index}`} />
						</div>
					</div>
				))}
			</div>
			<div
				className="arrow"
				style={{ right: "20px" }}
				onClick={() => handleClick("right")}
			>
				<AiOutlineArrowRight />
			</div>
		</div>
	);
}

export default Slider;
