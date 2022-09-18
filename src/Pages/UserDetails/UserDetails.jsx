import React from "react";
import { useGlobalContext } from "../../context";
import "./userdetails.scss";
function UserDetails() {
	const { user } = useGlobalContext();
  return <div className="user-details section__padding">{user.name}
  <br />{user.email} <br /> {user.phone}
  </div>;
}

export default UserDetails;
