import React from "react";
import "./navtop.scss";
function Navtop() {
	return (
		<div className="search-input-field section__padding">
			<input
				type="text"
				placeholder="Search your product"
				// onChange={(e) => setSearchVal(e.target.value)}
			/>
			<button>
				<span>Search</span>{" "}
			</button>
		</div>
	);
}

export default Navtop;
