import { useState } from "react";
export const ImgContainer = ({ img }) => {
	const [imgView, setImgView] = useState("");
	const handleImg = (index) => {
		setImgView(img[index]);
	};
	return (
		<div className="img-container">
			<div className="product-img">
				<img src={imgView || img[0]} alt="img" />
			</div>
			<div className="img-slider">
				{img
					? img.map((item, i) => (
							<img
								src={item}
								alt="slider"
								key={i}
								onMouseOver={() => handleImg(i)}
							/>
					  ))
					: null}
			</div>
		</div>
	);
};

// color
export const Select = ({ name, array, selected, setSelected }) => {
	return (
		<div className={name}>
			<div>{name}:</div>
			{array.map((item, i) => (
				<div key={i}>
					<span
						onClick={() => {
							setSelected(item);
						}}
						style={{ background: item }}
						key={i}
					>
						{name === "size" && item}
					</span>
				</div>
			))}
			<div className="selected">{selected}</div>
		</div>
	);
};

// quantity
export const Quantity = ({ quantity, setQuantity }) => {
	return (
		<p className="details-quantity">
			<span>Quantity:</span>{" "}
			<span
				onClick={() => quantity > 1 && setQuantity((p) => p - 1)}
				className="down"
			>
				-
			</span>
			<span className="quantity">{quantity}</span>
			<span onClick={() => setQuantity((p) => p + 1)} className="up">
				+
			</span>
		</p>
	);
};
