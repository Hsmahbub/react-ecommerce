import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./product.scss";
function Product({ item }) {
	const navigate = useNavigate()
	const { title, img, price,} = item;
	const productDetailsHandler = (item) => {
		navigate(`/product/${item._id}`)
	};
	return (
		<div className="product-box" onClick={()=>productDetailsHandler(item)}>
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
					</div>
				</div>
			</div>
		</div>
	);
}

export default Product;
