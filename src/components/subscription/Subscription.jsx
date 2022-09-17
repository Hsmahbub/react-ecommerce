import React from "react";
import "./subscription.scss";
import { toast } from "react-toastify";
import { getCoupon } from "../../Api Method/coupon";
import { toastObj } from "../../utils/toastObj";
import { useState } from "react";
const Subscription = () => {
	const [inputEmail, setInputEmail] = useState("");
	const [coupon, setCoupon] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const handleChange = (e) => {
		setInputEmail(e.target.value);
	};
	const handleSubmit = (e) => {
		setIsLoading(true);
		getCoupon(inputEmail, (res) => {
			console.log(res);
			if (res.data) {
				if (res.data.success) {
					setCoupon(res.data.success.coupon.code.toUpperCase());
				} else {
					toast.error("Invalid email", toastObj);
				}
			}
			setIsLoading(false);
		});
	};
	return (
		<div className="subscription section__padding">
			<div className="inner-subscription">
				<div className="form">
					<div className="form-desc">
						<h1>Get our special discount</h1>
						<p>
							Donec eu tristique felis. Duis augue mi, auctor ut
							purus et, dignissim aliquet quam. register your
							email for news and special offers
						</p>
					</div>

					<div className="form-input">
						<div className="input">
							<input
								type="email"
								placeholder="Enter your email"
								required
								value={coupon ? coupon : inputEmail}
								onChange={handleChange}
							/>
						</div>
						<div className="btn">
							<button
								type="button"
								disabled={isLoading}
								onClick={handleSubmit}
							>
								{isLoading ? "Wait" : "GET COUPON"}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Subscription;
