import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { ImLoop } from "react-icons/im";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import product from "./p9.png";
import "./product.css";

function Product({ name, price, id, img }) {
	const cropName = name.slice(0,10)
	const [love, setLove] = useState(false);
	return (
		<div className="productBox" key={id}>
			<div className="productImage">
				<img src={img} alt="45" />
			</div>
			<div className="productIconsAndDesc">
				<div className="product-icon">
					<div className="cartIcon iconBox">
						<FaShoppingCart />
					</div>
					<div className="loveICon iconBox">
						{love ? (
							<MdFavorite onClick={() => setLove(false)} />
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
				<div className="productDesc">
					<div className="productName">{cropName}</div>
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
	);
}

export default Product;
