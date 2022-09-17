export const FilterItem = ({ title, item, handleChange }) => {
	return (
		<div className="item">
			<h5>{title}:</h5>
			<select name={title} id={title} onChange={handleChange}>
				<option value="">Select {title}</option>
				{item.map((i, inx) => (
					<option key={inx} value={i}>
						{i}
					</option>
				))}
			</select>
		</div>
	);
};
