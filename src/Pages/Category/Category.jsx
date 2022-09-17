/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaSearch } from "react-icons/fa";
import { Footer, Navbar, Product, Topheader } from "../../Components/index";
import { useGlobalContext } from "../../context";
import Size from "./Size";
import Color from "./Color";
import "./category.css";
import data from "./data";
import pImg from "./p9.png";
import offer from "./Shop-Gird-leftsidebar.png";
function Category() {
	const { setMinVal, setMaxVal, minVal, maxVal } = useGlobalContext();
	const categoryHandler = () => {};
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
					<div className="left-bar">
						<h3>Category</h3>
						<div className="product-category-list">
							<ul>
								<li
									onClick={() =>
										categoryHandler("accesseries")
									}
								>
									Accesseries (15)
								</li>
								<li onClick={() => categoryHandler("dresses")}>
									Dresses (50)
								</li>
								<li onClick={() => categoryHandler("women")}>
									Women (150)
								</li>
								<li onClick={() => categoryHandler("men")}>
									Men (150)
								</li>
								<li onClick={() => categoryHandler("watch")}>
									Watch (150)
								</li>
								<li onClick={() => categoryHandler("bags")}>
									Bags (150)
								</li>
								<li onClick={() => categoryHandler("clothing")}>
									Clothing (150)
								</li>
							</ul>
						</div>
						<div className="category-price-filter">
							<h3>Price Filter</h3>
							<div className="price-range">
								<input
									type="number"
									onChange={(e) => setMinVal(e.target.value)}
									min="10"
									value={minVal}
								/>
								<input
									onChange={(e) => setMaxVal(e.target.value)}
									type="number"
									max={"3000"}
									value={maxVal}
								/>
								<span className="price-search-btn">
									<FaSearch />
								</span>
							</div>
						</div>
						<div className="size-filter">
							<h3>Size</h3>
							<div className="size-item">
								<Size value={"XS"} />
								<Size value={"SM"} />
								<Size value={"M"} />
								<Size value={"L"} />
								<Size value={"SL"} />
								<Size value={"XL"} />
								<Size value={"XXL"} />
							</div>
						</div>

						<div className="color-filter">
							<h3>Color</h3>
							<Color value="Black" />
							<Color value="Red" />
							<Color value="Blue" />
							<Color value="Green" />
							<Color value="Gray" />
						</div>
						<div className="category-top-rated">
							<h3>Top Rated</h3>
							<div className="top-rated-product">
								<div className="top-rated-product__img">
									<img
										src={pImg}
										width="80px"
										height="100px"
										alt="img"
									/>
								</div>
								<div className="top-rated-product__name-and-price">
									<p className="top-rated-product-name">
										Casuals mens ful sleve shirt
									</p>
									<p className="top-rated-product-price">$200.00</p>
								</div>
							</div>
						</div>
						<div className="offer-banner">
							<div className="banner-image">
								<img src={offer} alt="offer" />
							</div>
						</div>
					</div>
					<div className="category-product">
						<div className="category-product-title">
							<p>Showing result 1-12 of 44</p>
							<select name="sort" id="sort" className="sort">
								<option value="">Sort by newness</option>
								<option value="">Sort by low-price</option>
								<option value="">Sort by high-price</option>
							</select>
						</div>
						<div className="filter-products">
							{data.map((item, index) => (
								<div key={index}>
									<Product
										name={item.name}
										price={item.price}
										index={index}
									/>
								</div>
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
