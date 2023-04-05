/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { AiOutlineMail } from "react-icons/ai";
import { FaAddressBook } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import "./footer.scss";
function Footer() {
	return (
		<div className="footer">
			<div className="footer-links section__padding">
				<div className="info footer__common">
					<h3>INFORMATION</h3>
					<p>
						<a href="#">Delivery Information</a>
					</p>
					<p>
						<a href="#">Discount</a>
					</p>
					<p>
						<a href="#">Sitemap</a>
					</p>
					<p>
						<a href="#">Privacy Policy</a>
					</p>
					<p>
						<a href="#">My Account</a>
					</p>
				</div>
				<div className="my-account footer__common">
					<h3>MY ACCOUNT</h3>
					<p>
						<a href="#">Sing In</a>
					</p>
					<p>
						<a href="#">View Cart</a>
					</p>
					<p>
						<a href="#">My Wishlist</a>
					</p>
					<p>
						<a href="#">Check Out</a>
					</p>
					<p>
						<a href="#">Track My Order</a>
					</p>
				</div>
				<div className="help footer__common">
					<h3>HELP</h3>
					<p>
						<a href="#">F.A.Q</a>
					</p>
					<p>
						<a href="#">Shipping</a>
					</p>
					<p>
						<a href="#">Contact Us</a>
					</p>
					<p>
						<a href="#">Privacy Policy</a>
					</p>
					<p>
						<a href="#">Track My Order</a>
					</p>
				</div>
				<div className="contact-us footer__common">
					<h3>CONTACT US</h3>
					<p>
						<FaAddressBook className="icon" /> 1234 Your
						Address, Country
					</p>
					<p>
						<IoIosCall className="icon" /> +1 234 5678 9999
					</p>
					<p>
						<AiOutlineMail className="icon" />{" "}
						<a href="#">mail@domain.com</a>
					</p>
				</div>
			</div>
			<div className="copyright">
				<p>
					&copy; Copyright 2022 all right reserved - Developed by{" "}
					<a
						target={"_blank"}
						rel="noreferrer"
						href="https://www.facebook.com/hsmahbub"
					>
						Md Mahbub Alom
					</a>
				</p>
			</div>

		</div>
	);
}

export default Footer;
