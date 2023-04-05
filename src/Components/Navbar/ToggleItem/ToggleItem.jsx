import { Links } from "../Links";
import "./toggleItem.scss";

export const ToggleItem = () => {
	return (
		<div className="nav-bottom">
			<div className="links toggleMenu" >
				<Links className="menu-item"  />
			</div>
		</div>
	);
};
