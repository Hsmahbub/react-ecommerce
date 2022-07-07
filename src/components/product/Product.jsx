import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
// import { FaShoppingCart } from "react-icons/fa";
// import { ImLoop } from "react-icons/im";
// import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import "./product.css";

function Product({ name, price, img }) {
	// const [love, setLove] = useState(false);
	return (
		<div className="productBox">
			<div className="productImage">
				<img src={img} alt='img' width='100%' height={'100%'} />
			</div>
			<div className="productIconsAndDesc">
				{/* <div className="product-icon">
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
				</div> */}
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
	);
}

export default Product;
