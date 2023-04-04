import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { AddToCartApi, DeleteCartItemApi } from "../../Api Method/cart";
import "./product.scss";
import { useGlobalContext } from "../../context";
import { useEffect, useState } from "react";
function Product({ item }) {
	const { setCartData, cartData } = useGlobalContext();
	const navigate = useNavigate();
	const deleteCartIcon =
		"https://cdn-icons-png.flaticon.com/512/3756/3756946.png";
	const addCartIcon =
		"https://cdn-icons-png.flaticon.com/512/8564/8564086.png";
	const [cartIcon, setCartIcon] = useState(addCartIcon);
	const { title, img, price, color, size, _id } = item;
	const productDetailsHandler = (event) => {
		if (event.nativeEvent.target.parentNode.className === "cart-icon") {
			AddOrDeleteCart();
		} else {
			navigate(`/product/${item._id}`);
			window.scrollTo(0, 0);
		}
	};

	// cart delete or add function
	const AddOrDeleteCart = () => {
		const data = {
			productId: _id,
			color: color[0],
			size: size[0],
			quantity: 1,
			total_price: price,
		};
		if (cartIcon.endsWith("86.png")) {
			AddToCartApi(data, (res) => {
				if (res.status === 201) {
					setCartData((p) => [...p, res?.data]);
					setCartIcon(deleteCartIcon);
				}
			});
		} else {
			DeleteCartItemApi(item._id, (res) => {
				if (res?.status === 204) {
					setCartIcon(addCartIcon);
					setCartData((p) =>
						p.filter((i) => i.productId !== item._id)
					);
				}
			});
		}
	};

	useEffect(() => {
		for (const cart of cartData || []) {
			cart?.productId?.includes(item._id) &&
				setCartIcon(
					"https://cdn-icons-png.flaticon.com/512/3756/3756946.png"
				);
		}
	}, [cartData, item._id]);
	return (
		<div className="product-box" onClick={productDetailsHandler}>
			{item.img ? (
				<>
					<div className="product-image">
						<img src={img} alt="img" width="100%" height={"100%"} />
					</div>
					<div className="product-icons-and-desc">
						<div className="product-desc">
							<p className="product-name">{title}</p>
							<div className="price-star-carticon">
								<div className="price-and-star">
									<p className="price">${price}</p>

									<div className="star">
										<AiFillStar />
										<AiFillStar />
										<AiFillStar />
										<AiFillStar />
										<AiOutlineStar />
									</div>
								</div>
								<button
									className="cart-icon"
									title={
										cartIcon.endsWith("46.png")
											? "Remove from Cart"
											: "Add to Cart"
									}
								>
									<img
										width={"30px"}
										src={cartIcon}
										alt="car"
									/>
								</button>
							</div>
						</div>
					</div>
				</>
			) : (
				"load..."
			)}
		</div>
	);
}

export default Product;
