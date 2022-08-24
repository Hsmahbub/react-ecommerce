import InputField from "../../Form/InputField";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { SignupApi } from "../../../Database Managment/auth";
import { useFormik } from "formik";
import { validate } from "./validator";
import { toast } from "react-toastify";
import { toastObj } from "../../../utils/toastObj";
import "react-toastify/dist/ReactToastify.css";
import "./signup.scss";
import { useGlobalContext } from "../../../context";
import { useState } from "react";
function Signup() {
	const { handleModals } = useGlobalContext();
	const [isLoading, setIsLoading] = useState(false);
	// handler
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			phone: "",
			password: "",
			cPassword: "",
		},
		validate,
		onSubmit: (values) => {
			setIsLoading(true);
			SignupApi(values, (res) => {
				if (res.data) {
					if (res.data.error) {
						res.data.error.email &&
							(formik.errors.email = res.data.error.email);
						res.data.error.phone &&
							(formik.errors.phone = res.data.error.phone);
						setIsLoading(false);
					} else {
						handleModals("signup", false);
						handleModals("login", true);
						toast.success(res.data.success.msg, toastObj);
						setIsLoading(false);
					}
				}
			});
		},
	});
	return (
		<div id="signup">
			<div className="wrapper">
				<RiDeleteBack2Fill
					className="cross"
					onClick={() => handleModals("signup", false)}
				/>
				<form onSubmit={formik.handleSubmit}>
					<h1>Signup</h1>
					<InputField
						fieldName="name"
						placeholder="Name"
						type="text"
						value={formik.values.name}
						isRequired={true}
						onChange={formik.handleChange}
					/>
					<p>{formik.errors.name ? formik.errors.name : null}</p>
					<InputField
						fieldName="email"
						placeholder="Email"
						value={formik.values.email}
						type="email"
						isRequired={true}
						onChange={formik.handleChange}
					/>
					<p>{formik.errors.email ? formik.errors.email : null}</p>
					<InputField
						fieldName="phone"
						value={formik.values.phone}
						placeholder="Phone"
						type="text"
						isRequired={true}
						onChange={formik.handleChange}
					/>
					<p>{formik.errors.phone ? formik.errors.phone : null}</p>
					<InputField
						fieldName="password"
						placeholder="Password"
						type="password"
						value={formik.values.password}
						isRequired={true}
						onChange={formik.handleChange}
					/>
					<p>
						{formik.errors.password ? formik.errors.password : null}
					</p>
					<InputField
						fieldName="cPassword"
						placeholder="Confirm Password"
						value={formik.values.cPassword}
						type="password"
						isRequired={true}
						onChange={formik.handleChange}
					/>
					<p>
						{formik.errors.cPassword
							? formik.errors.cPassword
							: null}
					</p>
					<button className="submit-btn" type="submit">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default Signup;
