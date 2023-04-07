import React, { useEffect, useState } from "react";
import { RenderProducts } from "../index";
import "./searchresult.scss";
import { FilterItem } from "./subcomponents.jsx";
import { useLocation, useLoaderData } from "react-router-dom";

function SearchResult() {
	const response = useLoaderData()
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [filterKeyword, setFilterKeyword] = useState({});
	const location = useLocation()
	const search = new URLSearchParams(location.search).get('keyword')
	const handleChange = (e) => {
		setFilterKeyword({ ...filterKeyword, [e.target.name]: e.target.value });
	};
	useEffect(() => {
		setFilteredProducts(response?.data || [])
	}, [response])
	return (
		<div className="search-result">
			<p>Search Keyword: {search}</p>
			<div className="filterBox" style={{ display: 'none' }}>
				<h2>Filter</h2>
				<div className="wrapper">
					<FilterItem
						title={"size"}
						item={["xl", "sm", "md"]}
						handleChange={handleChange}
					/>
					<FilterItem
						title={"color"}
						item={["green", "yellor", "white"]}
						handleChange={handleChange}
					/>
					<FilterItem
						title={"price"}
						item={["high", "medium", "low"]}
						handleChange={handleChange}
					/>
				</div>
			</div>
			<div className="result">
				<RenderProducts
					products={filteredProducts}
					status={response}
					sectionSubtitle={""}
					sectionTitle="Search Products"
				/>
			</div>
		</div>
	);
}

export default SearchResult;
