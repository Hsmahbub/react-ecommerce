import React from "react";
import { Footer, Navbar, SearchResult } from "../../Components/index";
import Search from "../../Components/Search/Search";
function SearchPage() {
	return (
		<div className="search-page">
			<Navbar />
			<Search />
			<SearchResult />
			<Footer />
		</div>
	);
}

export default SearchPage;
