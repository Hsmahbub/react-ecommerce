/* eslint-disable jsx-a11y/anchor-is-valid */
import { Footer, Navbar, Topheader } from "../../components";
import { FaSearch } from "react-icons/fa";
import "./category.css";
import offer from "./Shop-Gird-leftsidebar.png";
import pImg from "./p9.png";
import { Product } from "../../components";
import data from "./data";
function Category() {
	return (
		<div>
			<Topheader />
			<Navbar />
			<div className="checkout section__padding">
				<div className="page__index">
					<a href="#">Home </a> &gt;&gt; <a href="#">Page </a>&gt;&gt;
					<a href="#">Shop </a>&gt;&gt;<a href="#">Category</a>
				</div>

				<div className="category">
					<div className="leftBar">
						<h3>Category</h3>
						<div className="catList">
							<ul>
								<li>Accesseries (15)</li>
								<li>Dresses (50)</li>
								<li>Women (150)</li>
								<li>Men (150)</li>
								<li>Watch (150)</li>
								<li>Bags (150)</li>
								<li>Clothing (150)</li>
							</ul>
						</div>
						<div className="priceFilter">
							<h3>Price Filter</h3>
							<div className="range">
								<input type="range" />
							</div>
							<br />
							<div className="priceRange">
								<input type="number" min="10" value="10" />
								<input type="number" value="3000" />
								<span className="filterBtn">
									<FaSearch />
								</span>
							</div>
						</div>
						<div className="sizeFilter">
							<h3>Size</h3>
							<div className="sizes">
								<p>XS</p>
								<p>S</p>
								<p>M</p>
								<p>L</p>
								<p>SL</p>
								<p>XL</p>
								<p>XXL</p>
							</div>
						</div>
						<div className="colorFilter">
							<h3>Color</h3>
							<div>
								<span className="chooseColor"></span>
								<span>Black</span>
							</div>
							<div>
								<span className="chooseColor"></span>
								<span>Blue</span>
							</div>
							<div>
								<span className="chooseColor"></span>
								<span>White</span>
							</div>
							<div>
								<span className="chooseColor"></span>
								<span>Yellow</span>
							</div>
						</div>
						<div className="topRated">
							<h3>Top Rated</h3>
							<div className="ratedProduct">
								<div className="ratedProduct__img">
									<img
										src={pImg}
										width="80px"
										height="100px"
										alt="img"
									/>
								</div>
								<div className="ratedProduct__nameAndPrice">
									<p className="pname">
										Casuals mens ful sleve shirt
									</p>
									<p className="pprice">$200.00</p>
								</div>
							</div>
							<div className="ratedProduct">
								<div className="ratedProduct__img">
									<img
										src={pImg}
										width="80px"
										height="100px"
										alt="img"
									/>
								</div>
								<div className="ratedProduct__nameAndPrice">
									<p className="pname">
										Casuals mens ful sleve shirt
									</p>
									<p className="pprice">$200.00</p>
								</div>
							</div>
							<div className="ratedProduct">
								<div className="ratedProduct__img">
									<img
										src={pImg}
										width="80px"
										height="100px"
										alt="img"
									/>
								</div>
								<div className="ratedProduct__nameAndPrice">
									<p className="pname">
										Casuals mens ful sleve shirt
									</p>
									<p className="pprice">$200.00</p>
								</div>
							</div>
						</div>
						<div className="offer-banner">
							<div className="banner-mag">
								<img src={offer} alt="offer" />
							</div>
						</div>
					</div>
					<div className="categoryProduct">
						<div className="catprod-title">
							<p>Showing result 1-12 of 44</p>
							<select name="sort" id="sort" className="sort">
								<option value="">Sort by newness</option>
								<option value="">Sort by low-price</option>
								<option value="">Sort by high-price</option>
							</select>
						</div>
						<div className="filterProducts">
							{data.map((item, index) => (
								<Product
									name={item.name}
									price={item.price}
									index={index}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Category;
