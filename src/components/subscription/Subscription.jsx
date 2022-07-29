import React from "react";
import "./subscription.scss";
function subscription() {
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
							<input type="email" placeholder="Enter your email"/>
						</div>
						<div className="btn">
							<button type="button">GET COUPON</button>
						</div>
					</div>

				</div>
			</div>
		</div>
	);
}

export default subscription;
