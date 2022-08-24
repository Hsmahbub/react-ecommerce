import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Login from "../../Components/Modals/Login/Login";
import { useGlobalContext } from "../../context";
import { addToCart } from "../../Database Managment/cart";
import { singleProduct } from "../../Database Managment/product";
import { toastObj } from "../../utils/toastObj";
import "./details.scss";
import { ImgContainer, Quantity, Select } from "./SubComponents";
function Details() {
	const navigate = useNavigate();
	const location = useLocation();
	const id = location.pathname.split("/")[2];
	const [product, setProduct] = useState({});
	const [color, setColor] = useState("");
	const [size, setSize] = useState("");
	const [quantity, setQuantity] = useState(1);
	const { setIsLoading, user, handleModals } = useGlobalContext();
	const { img, categories, title, desc, price } = product;
	const item = {
		productId: id,
		color,
		size,
		quantity,
		img,
		categories,
		title,
		desc,
		price,
	};
	const total = product.price * quantity;
	// destructured variable
	useEffect(() => {
		singleProduct(id, (res) => {
			setProduct(res);
		});
	}, [id]);
	// funtion
	const handleBuy = (item) => {
		const { color, size } = item;
		!color && toast.warning("Please select a color", toastObj);
		!size && toast.warning("Please select a size", toastObj);
		if (color && size) {
			if (!user) {
				handleModals("login", true);
			} else {
				const isSuccess = addToCart(item, (res) => {
					if (res._id === id) {
						return true;
					} else return false;
				});
				isSuccess && navigate(`/checkout/${id}`);
				window.location.reload();
			}
		}
	};
	const handleAddCart = () => {};
	return (
		<>
			{product ? (
				<div className="product-details">
					{product.img && <ImgContainer img={product.img} />}
					<div className="info-container">
						<h2>{product.title}</h2>
						<div className="desc">{product.desc}</div>
						<hr />
						<p className="rating">Rating: 4.5</p>
						<p className="brand">Brand: No Brand</p>
						{/* for color selection  */}
						{product.color && (
							<Select
								array={product.color}
								selected={color}
								setSelected={setColor}
								name={"color"}
							/>
						)}
						{/* for size selection  */}
						{product.size && (
							<Select
								array={product.size}
								selected={size}
								setSelected={setSize}
								name={"size"}
							/>
						)}
						<hr />
						<p className="price">
							<span>Price: ${product.price}</span>
							<span>Total: ${total}</span>
						</p>
						<Quantity
							quantity={quantity}
							setQuantity={setQuantity}
						/>
						<div className="btn">
							<button
								className="buy-btn"
								onClick={() => handleBuy(item)}
							>
								Buy Now
							</button>
							<button
								className="addCart-btn"
								onClick={handleAddCart}
							>
								Add to Cart
							</button>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
}

export default Details;
