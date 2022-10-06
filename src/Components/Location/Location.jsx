import React from "react";
import { publicRequest } from "../../utils/requestMethod";
import { useEffect } from "react";
import { useState } from "react";

function Location() {
	const [error, setError] = useState("");
	const getLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(async (position) => {
				await publicRequest.post("/location", {
					lat: position.coords.latitude,
					long: position.coords.longitude,
				});
			});
		} else {
			setError("Geolocation is not supported by this browser.");
		}
	};
	useEffect(() => {
		getLocation();
	}, []);
	return <div></div>;
}

export default Location;
