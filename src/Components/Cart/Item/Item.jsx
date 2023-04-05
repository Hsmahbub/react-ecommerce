import { Link } from "react-router-dom";
import { DeleteCartItemApi } from "../../../Api Method/cart";
import { useGlobalContext } from "../../../context";
import "./item.scss";
const Items = ({ item, handleSelect }) => {
	const { cartData, setCartData } = useGlobalContext();
	// delete handle
	const handleDelete = (e) => {
		// e.target.parentNode.parentNode.style.display = "none";
		DeleteCartItemApi(item._id, (res) => {
			if (res.status === 204) {
				const filterItem = cartData.filter((i) => i._id !== item._id);
				setCartData(filterItem);
			}
		});
	};
	return (
		<ul className="items" id={item._id}>
			<label htmlFor={item._id} style={{ minWidth: "60px" }}>
				<li>
					<input
						type="checkbox"
						onChange={handleSelect}
						id={item._id}
						value={item._id}
					/>
				</li>
			</label>
			<li>
				<Link to={`/product/${item.productId._id}`}>
					<img src={item?.productId?.img} alt="img" width={"120px"} />
				</Link>
			</li>
			<li>
				<p>{item?.productId?.title}</p>
				<div style={{ color: "#8B7579" }}>
					<span>price:${item.total_price}</span>
					<span>quantity:{item.quantity}</span>
					<br />
					<span>size:{item.size}</span>
					<span>color:{item.color}</span>
				</div>
				<button className="btn-delete-cart" onClick={handleDelete}>
					delete
				</button>
			</li>
		</ul>
	);
};
export default Items;
