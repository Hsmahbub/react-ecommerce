import { useEffect } from "react";
import { useState } from "react";
import { useGlobalContext } from "../../context";
function Size({ value }) {
	const [isSelecet, setIsSelect] = useState(false);
	const [style, setStyle] = useState({});
	const [size, setSize] = useState("");
	const { setFilterSize } = useGlobalContext();
	useEffect(() => {
		setFilterSize(size);
	}, [size, setFilterSize]);
	const sizeHandler = (type) => {
		size === "" ? setSize(type) : setSize("");
		if (!isSelecet) {
			setStyle({ backgroundColor: "#00B97C", transform: "scale(1.1)" });
			setIsSelect(true);
		} else {
			setStyle({ backgroundColor: "", transform: "scale(1.0)" });
			setIsSelect(false);
		}
	};
	return (
		<p style={style} onClick={() => sizeHandler(value)}>
			{value}
		</p>
	);
}

export default Size;
