export const Select = ({ option, name }) => {
	return (
		<>
			<label htmlFor={name}>{name}*</label>
			<br />
			<select name={name} id={name}>
				{option.map((item, i) => (
					<option key={i} value={item}>
						{item}
					</option>
				))}
			</select>
		</>
	);
};

export const Input = ({
	labelValue,
	type,
	name,
	value,
	placeholder,
	handleChange,
}) => {
	return (
		<div>
			<label htmlFor={name}>{labelValue}</label>
			<input
				onChange={handleChange}
				type={type}
				value={value}
				name={name}
				placeholder={placeholder}
			/>
		</div>
	);
};
