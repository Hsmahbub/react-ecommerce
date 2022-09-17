import React from "react";
import { Navbar, Footer, SearchResult } from "../../Components/index";
function SearchPage() {
	return (
		<div className="search-page">
			<Navbar />
			<SearchResult />
			<Footer />
		</div>
	);
}

export default SearchPage;
