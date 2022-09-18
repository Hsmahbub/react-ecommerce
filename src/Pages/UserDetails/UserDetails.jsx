import React from "react";
import { useGlobalContext } from "../../context";
import "./userdetails.scss";
function UserDetails() {
	const { user } = useGlobalContext();
	return (
		<div className="user-details section__padding">
      <div className="wrapper">
        <img src={user.img} alt="user" />
				<h3>{user.name}</h3>
				<h3>{user.email}</h3>
				<h3>{user.phone}</h3>
			</div>
		</div>
	);
}

export default UserDetails;
