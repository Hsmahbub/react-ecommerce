import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { ImLoop } from "react-icons/im";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useState } from "react";
import "./product.css";
import product from "./p9.png";

function Product({ name, price ,id}) {
	const [love,setLove] = useState(false)
	return (
		<div className="product" key={id}>
			<div className="innerProduct">
				<div className="productBox">
					<div className="productImage">
						<img src={product} alt="45" />
						<div className="productIcons">
							<div className="cartIcon iconBox">
								<FaShoppingCart />
							</div>
							<div className="loveICon iconBox">
								{love ? (
									<MdFavorite
										onClick={() => setLove(false)}
									/>
								) : (
									<MdOutlineFavoriteBorder
										onClick={() => setLove(true)}
									/>
								)}
							</div>
							<div className="loopIcon iconBox">
								<ImLoop />
							</div>
						</div>
					</div>
					<div className="productDesc">
						<div className="productName">{name}</div>
						<div className="price">{price}</div>
						<div className="star">
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
							<AiOutlineStar />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Product;
