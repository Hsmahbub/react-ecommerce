import { useEffect, useState } from "react";
import { useGlobalContext } from "../../context";
function Color({ value }) {
	const { setFilterColor } = useGlobalContext();
	const [isSelect, setIsSelect] = useState(false);
	const [style, setStyle] = useState({});
	const [color, setColor] = useState("");
	useEffect(() => {
		setFilterColor(color);
	}, [color, setFilterColor]);
	const colorHandler = () => {
		Color === "" ? setColor(value) : setColor("");
		if (!isSelect) {
			setStyle({ transform: "scale(1.1)", backgroundColor: "#00BA80" });
			setIsSelect(true);
		} else {
			setStyle({});
			setIsSelect(false);
		}
	};
	return (
		<div onClick={colorHandler}>
			<span className="chooseColor" style={style}></span>
			<span> {value} </span>
		</div>
	);
}
export default Color;
