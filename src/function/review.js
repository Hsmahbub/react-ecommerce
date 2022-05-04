import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useState } from "react";
const Review = () => {
	const [star, setStar] = useState({
		star1: false,
		star2: false,
		star3: false,
		star4: false,
		star5: false,
	});

	const { star1, star2, star3, star4, star5 } = star;
	const reviews = (btn) => {
		if (btn === "r1") {
			star1
				? setStar((prev) => ({ star1: false }))
				: setStar((prev) => ({ star1: true }));
		}

		if (btn === "r2") {
			star2
				? setStar((prev) => ({
						...prev,
						star2: false,
						star3: false,
						star4: false,
						star5: false,
				  }))
				: setStar((prev) => ({
						...prev,
						star2: true,
						star1: true,
				  }));
		}
		if (btn === "r3") {
			star3
				? setStar((prev) => ({
						...prev,
						star3: false,
						star4: false,
						star5: false,
				  }))
				: setStar((prev) => ({
						...prev,
						star3: true,
						star2: true,
						star1: true,
				  }));
		}

		if (btn === "r4") {
			star4
				? setStar((prev) => ({
						...prev,
						star4: false,
						star5: false,
				  }))
				: setStar((prev) => ({
						...prev,
						star1: true,
						star2: true,
						star3: true,
						star4: true,
				  }));
		}
		if (btn === "r5") {
			star5
				? setStar((prev) => ({
						...prev,
						star5: false,
				  }))
				: setStar((prev) => ({
						...prev,
						star1: true,
						star2: true,
						star3: true,
						star4: true,
						star5: true,
				  }));
		}
	};
	console.log(star.star3);

	return (
		<div className="star">
			{star1 ? (
				<AiFillStar
					onClick={() => {
						reviews("r1");
					}}
				/>
			) : (
				<AiOutlineStar
					onClick={() => {
						reviews("r1");
					}}
				/>
			)}

			{star2 ? (
				<AiFillStar onClick={() => reviews("r2")} />
			) : (
				<AiOutlineStar onClick={() => reviews("r2")} />
			)}
			{star3 ? (
				<AiFillStar onClick={() => reviews("r3")} />
			) : (
				<AiOutlineStar onClick={() => reviews("r3")} />
			)}

			{star4 ? (
				<AiFillStar onClick={() => reviews("r4")} />
			) : (
				<AiOutlineStar onClick={() => reviews("r4")} />
			)}
			{star5 ? (
				<AiFillStar onClick={() => reviews("r5")} />
			) : (
				<AiOutlineStar onClick={() => reviews("r5")} />
			)}
		</div>
	);
};

export default Review;
