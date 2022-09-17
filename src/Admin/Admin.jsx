import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";
import "./Admin.scss";
import { UpdateStatus, AdminSignup, ProductForm } from "./Components/index";

function Admin() {
	const { admin, setAdmin } = useGlobalContext();
	console.log(admin);
	const navigate = useNavigate();
	const [errors, setErrors] = useState({});
	return (
		<div className="admin">
			<div className="option">
				<button>Add Product</button>
				<button>Update Order Status</button>
			</div>
		</div>
	);
}

export default Admin;
