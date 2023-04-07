import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./search.scss";
function Search() {
	const navigate = useNavigate();
	const [search, setSearch] = useState("");
	return (
		<div className="search-input-field section__padding">
			<input
				type="text"
				placeholder="Search your product"
				value={search}
				onChange={(e) => {
					setSearch(e.target.value);
				}}
			/>
			<button>
				<span
					onClick={() => {
						navigate(`/search/?keyword=${search}`);
						setSearch('')
					}}
				>
					Search
				</span>{" "}
			</button>
		</div>
	);
}

export default Search;
