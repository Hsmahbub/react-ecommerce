import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { searchProductApi } from "../../Api Method/product";
import { toastObj } from "../../utils/toastObj";
import { RenderProducts } from "../index";
import "./searchresult.scss";
import { FilterItem } from "./subcomponents.jsx";

function SearchResult() {
	const searchKeyword = localStorage.getItem("searchTerm");
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [filterKeyword, setFilterKeyword] = useState({});

	const handleChange = (e) => {
		setFilterKeyword({ ...filterKeyword, [e.target.name]: e.target.value });
	};
	console.log(filterKeyword);
	useEffect(() => {
		searchProductApi(searchKeyword, (res) => {
			if (res.data) {
				if (res.data.success) {
					setFilteredProducts(res.data.success);
				}
			} else {
				toast.error("something went wrong", toastObj);
			}
		});
	},[]);
	return (
		<div className="search-result">
			<p>Search Keyword: {searchKeyword}</p>
			<div className="filterBox">
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
					sectionSubtitle={""}
					sectionTitle="Search Products"
				/>
			</div>
		</div>
	);
}

export default SearchResult;
