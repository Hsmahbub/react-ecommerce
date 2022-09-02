import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useGlobalContext } from "../../context";
import { AddToCartApi } from "../../Api Method/cart";
import { GetSingleProductApi } from "../../Api Method/product";
import { toastObj } from "../../utils/toastObj";
import "./details.scss";
import { Navbar, Footer } from "../../Components/index";
import { ImgContainer, Quantity, Select } from "./SubComponents";
function Details() {
	const { user, cartItem, setCartItem, handleModals } = useGlobalContext();
	const navigate = useNavigate();
	const location = useLocation();
	const id = location.pathname.split("/")[2];
	const [product, setProduct] = useState({});
	const [color, setColor] = useState("");
	const [size, setSize] = useState("");
	const [quantity, setQuantity] = useState(1);
	const isCartAdded = cartItem.findIndex((i) => i._id === id) > -1;
	const item = {
		productId: id,
		quantity,
		color,
		size,
	};
	const total = product.price * quantity;
	// destructured variable
	useEffect(() => {
		GetSingleProductApi(id, (res) => {
			setProduct(res.data.success);
			res.errorMsg && console.log(res.errorMsg, res.err);
		});
	}, [id]);
	// funtion
	const handleBuyOrCart = (item, isBuy) => {
		!color && toast.warning("Please select a color", toastObj);
		!size && toast.warning("Please select a size", toastObj);
		if (color && size) {
			if (!user) {
				handleModals("login", true);
			} else {
				AddToCartApi(item, (res) => {
					if (res.data.success) {
						if (isBuy) {
							localStorage.setItem("selectedItem", [id]);
							navigate(`/checkout/`);
						} else {
							toast.success("Added", toastObj);
						}
						setCartItem(res.data.success.products);
					}
				});
			}
		}
	};
	return (
		<>
			<Navbar />
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
								onClick={() => handleBuyOrCart(item, true)}
							>
								Buy Now
							</button>
							<button
								className="addCart-btn"
								onClick={() => {
									isCartAdded
										? navigate("/carts")
										: handleBuyOrCart(item, false);
								}}
							>
								{isCartAdded ? "Go to Cart" : "Add to Cart"}
							</button>
						</div>
					</div>
				</div>
			) : null}
			<Footer />
		</>
	);
}

export default Details;
