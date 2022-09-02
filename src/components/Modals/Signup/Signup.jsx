import InputField from "../../Form/InputField";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { SignupApi } from "../../../Api Method/auth";

import {
	signupFormValidator,
	buttonValidator,
} from "../../../utils/formValidation";
import { toast } from "react-toastify";
import { toastObj } from "../../../utils/toastObj";
import "react-toastify/dist/ReactToastify.css";
import "./signup.scss";
import { useGlobalContext } from "../../../context";
import { useEffect, useState } from "react";
function Signup() {
	const { handleModals } = useGlobalContext();
	let initial = {
		name: "",
		email: "",
		phone: "",
		password: "",
		cPassword: "",
	};
	const [inputValue, setInputValue] = useState(initial);
	const [errors, setErrors] = useState({});
	const { isDisabled, css } = buttonValidator(errors);
	// handler
	const changeHandler = (e) => {
		setInputValue({ ...inputValue, [e.target.name]: e.target.value });
		setErrors(signupFormValidator({ ...inputValue, [e.target.name]: e.target.value }));
	};
	const formSubmitHandler = (e) => {
		e.preventDefault();
		handleModals("loading", true);

		// res from server
		SignupApi(inputValue, (res) => {
			// condition
			if (res.data) {
				if (res.data.error) {
					setErrors(res.data.error);
				} else {
					handleModals("signup", false);
					handleModals("login", true);
					toast.success(res.data.success.msg, toastObj);
				}
			} else {
				toast.error(res.error.errorMsg, toastObj);
			}
			handleModals("loading", false);
		});
	};

	// use effect for error handling
	useEffect(() => {
		setErrors({})
	}, []);

	return (
		<div id="signup">
			<div className="wrapper">
				<RiDeleteBack2Fill
					className="cross"
					onClick={() => {
						handleModals("signup", false);
						setInputValue(initial);
					}}
				/>
				<form onSubmit={formSubmitHandler}>
					<h1>Signup</h1>
					<InputField
						fieldName="name"
						placeholder="Name"
						type="text"
						value={inputValue.name}
						isRequired={true}
						onChange={changeHandler}
					/>
					<p>{errors.name ? errors.name : null}</p>
					<InputField
						fieldName="email"
						placeholder="Email"
						value={inputValue.email}
						type="email"
						isRequired={true}
						onChange={changeHandler}
					/>
					<p>{errors.email ? errors.email : null}</p>
					<InputField
						fieldName="phone"
						value={inputValue.phone}
						placeholder="Phone"
						type="text"
						isRequired={true}
						onChange={changeHandler}
					/>
					<p>{errors.phone ? errors.phone : null}</p>
					<InputField
						fieldName="password"
						placeholder="Password"
						type="password"
						value={inputValue.password}
						isRequired={true}
						onChange={changeHandler}
					/>
					<p>{errors.password ? errors.password : null}</p>
					<InputField
						fieldName="cPassword"
						placeholder="Confirm Password"
						value={inputValue.cPassword}
						type="password"
						isRequired={true}
						onChange={changeHandler}
					/>
					<p>{errors.cPassword ? errors.cPassword : null}</p>
					<button
						className="submit-btn"
						type="submit"
						style={css}
						disabled={!isDisabled}
					>
						Submit
					</button>
				</form>
				<button
					className=" have-an-account"
					onClick={() => {
						handleModals("signup", false);
						handleModals("login", true);
					}}
				>
					already hava an account?
				</button>
			</div>
		</div>
	);
}

export default Signup;
