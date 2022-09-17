import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./search.scss";
function Navtop() {
	const navigate = useNavigate();
	const [search, setSearch] = useState("");
	return (
		<div className="search-input-field section__padding">
			<input
				type="text"
				placeholder="Search your product"
				onChange={(e) => {
					setSearch(e.target.value);
				}}
			/>
			<button>
				<span
					onClick={() => {
						localStorage.setItem("searchTerm", search);
						navigate("/search");
						window.location.reload();
					}}
				>
					Search
				</span>{" "}
			</button>
		</div>
	);
}

export default Navtop;
