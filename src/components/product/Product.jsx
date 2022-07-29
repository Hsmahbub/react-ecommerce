import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { useGlobalContext } from "../../context";
import "./product.scss";
function Product({ item }) {
	const { title, img, desc,price } = item;
	const { addToCart } = useGlobalContext();
	return (
		<div className="product-box">
			<div className="product-image">
				<img src={img} alt="img" width="100%" height={"100%"} />
			</div>
			<div className="product-icons-and-desc">
				<div className="product-desc">
					<p className="productn-name">{title}</p>
					<div className="price-star-carticon">
						<div className="price-and-star">
							<div className="price">{price}</div>
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
							onClick={() => {
								addToCart(item)
							console.log(item);
							}}
						>
							Add
							<FaShoppingCart />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Product;
