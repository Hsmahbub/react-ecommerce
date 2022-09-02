export const SingleItem = ({ first, second }) => {
	return (
		<div className="single-item">
			<p>{first}</p>
			<p>{second}</p>
		</div>
	);
};

export const SingelItem2 = ({ icon, text, handleClick }) => {
	return (
		<div className="single-item2">
			<p>
				<span className="icon">{icon}</span>
				<span>{text} </span>
			</p>
		</div>
	);
};
export const Payment = ({ handlePaymentMethod, option, }) => {
	return (
		<div className="payment">
			<span className="title">Payment Method:</span>
			{option.map((item, i) => (
				<img
					key={i}
					id={item.name}
					onClick={() => handlePaymentMethod(item.name)}
					src={item.img}
					alt="logo"
					className="option"
				/>
			))}
		</div>
	);
};

// product item
export const ProuductItem = ({ product }) => {
	return (
		<div className="product-item">
			<div className="img">
				<img
					width={"150px"}
					src={product.img && product.img[1]}
					alt="img"
				/>
			</div>
			<div className="item">
				<p>{product.title}</p>
				<p>{product.desc}</p>
				<p>
					<span>price:${product.price},</span>
					<span>quantity:{product.quantity},</span>
					{product.color && <span>color:{product.color},</span>}
					{product.size && <span>size:{product.size},</span>}
					<span>total_price:${product.total_price}</span>
				</p>
			</div>
		</div>
	);
};
