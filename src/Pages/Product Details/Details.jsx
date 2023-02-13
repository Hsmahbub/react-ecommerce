/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, } from "react";
import { useLocation, useNavigate, } from "react-router-dom";
import { toast } from "react-toastify";
import { useGlobalContext } from "../../context";
import { AddToCartApi } from "../../Api Method/cart";
import { GetSingleProductApi } from "../../Api Method/product";
import { toastObj } from "../../utils/toastObj";
import "./details.scss";
import { Navbar, Footer, Loading } from "../../Components/index";
import { ImgContainer, Quantity, Select } from "./SubComponents";
function Details() {
	const { user, cartData, setCartData, handleModals } = useGlobalContext();
	const navigate = useNavigate();
	const location = useLocation();
	const id = location.pathname.split("/")[2];
	const [product, setProduct] = useState({});
	const [color, setColor] = useState("");
	const [size, setSize] = useState("");
	const [quantity, setQuantity] = useState(1);
	const [isCartAdded, setIsCartAdded] = useState(false);
	const total_price = product.price * quantity;
	const item = {
		productId: id,
		quantity,
		color,
		size,
		total_price,
	};
	// get the product details for db
	useEffect(() => {
		GetSingleProductApi(id, (res) => {
			if (res.status === 200) {
				setProduct(res?.data);
				setColor(res?.data?.color[0]);
				setSize(res?.data?.size[0]);
			}
			for (const item of cartData || []) {
				item?.productId?.includes(id) && setIsCartAdded(true);
			}
		});
	}, [id, cartData]);
	// funtion
	// buy product
	const handleBuyProduct = () => {
			AddToCartApi(item, (res) => {
				if (res.status === 201) {
					navigate(`/checkout/${res?.data?._id}`);
					window.location.reload()
				} else {
					console.log("something went wrong");
				}
			});
	};

	// add to cart
	const handleAddCart = () => {
		if (!user) {
			handleModals("login", true);
			return;
		}
		AddToCartApi(item, (res) => {
			if (res.status === 201) {
				toast.success("Added", toastObj);
				setCartData((p) => [...p, res?.data]);
				setIsCartAdded(true);
			}
		});
	};

	return (
		<div className="product-details-page">
			<Navbar />
			{product ? (
				<div className="product-details">
					{product.img ? (
						<ImgContainer img={product.img} />
					) : (
						<Loading />
					)}
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
							<span>Total: ${total_price}</span>
						</p>
						<Quantity
							quantity={quantity}
							setQuantity={setQuantity}
						/>
						<div className="btn">
							<button
								className="buy-btn"
								onClick={handleBuyProduct}
							>
								Buy Now
							</button>
							<button
								className="addCart-btn"
								onClick={() => {
									isCartAdded
										? navigate("/carts")
										: handleAddCart();
								}}
							>
								{isCartAdded ? "Go to Cart" : "Add to Cart"}
							</button>
						</div>
					</div>
				</div>
			) : null}
			<Footer />
		</div>
	);
}

export default Details;
