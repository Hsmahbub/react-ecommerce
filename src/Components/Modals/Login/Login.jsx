import { useEffect, useState } from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { toast } from "react-toastify";
import { LoginApi } from "../../../Api Method/auth";
import { useGlobalContext } from "../../../context";
import {
	buttonValidator,
	loginFormValidator,
} from "../../../utils/formValidation";
import { toastObj } from "../../../utils/toastObj";
import InputField from "../../Form/InputField";
import "./login.scss";

function Login() {
	const { handleModals } = useGlobalContext();
	const initial = {
		username: "",
		password: "",
	};
	const [inputData, setInputData] = useState(initial);
	const [errors, setError] = useState({});
	const { isDisabled, css } = buttonValidator(errors);
	const handleChange = (e) => {
		setInputData({ ...inputData, [e.target.name]: e.target.value });
		setError(
			loginFormValidator({
				...inputData,
				[e.target.name]: e.target.value,
			})
		);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		handleModals("loading", true);
		LoginApi(inputData, (res) => {
			console.log(res.status);
			if (res?.status === 200) {
				handleModals("login", false);
				console.log(res);
				window.location.reload();
			} else {
				toast.error(res.data.message, toastObj);
			}
			handleModals("loading", false);
		});
	};
	useEffect(() => {
		setError({});
	}, []);
	return (
		<div id="login">
			<div className="wrapper">
				<RiDeleteBack2Fill
					className="cross"
					onClick={() => handleModals("login", false)}
				/>
				<form action="#" onSubmit={handleSubmit}>
					<h1>Login</h1>
					<InputField
						fieldName="username"
						placeholder="Email or phone"
						value={inputData.username}
						type="text"
						isRequired={true}
						onChange={handleChange}
					/>
					<p>{errors.username ? errors.username : null}</p>
					<InputField
						fieldName="password"
						placeholder="Password"
						type="password"
						value={inputData.password}
						isRequired={true}
						onChange={handleChange}
					/>
					<p>{errors.password ? errors.password : null}</p>
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
					className="have-an-account"
					onClick={() => {
						handleModals("login", false);
						handleModals("signup", true);
					}}
				>
					don't have an account?
				</button>
			</div>
		</div>
	);
}
export default Login;
