import InputField from "../../Form/InputField";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { toast } from "react-toastify";
import { useGlobalContext } from "../../../context";
import { LoginApi } from "../../../Database Managment/auth";
import { Loading } from "../../index";
import { toastObj } from "../../../utils/toastObj";
import { useFormik } from "formik";
import { validate } from "./validator";
import "./login.scss";

function Login() {
	const { setUser, handleModals } = useGlobalContext();
	const formik = useFormik({
		initialValues: {
			username: "",
			password: "",
		},
		validate,
		onSubmit: (values) => {
			handleModals("loading", true);
			LoginApi(values, (res) => {
				if (res.data) {
					if (res.data.error) {
						res.data.error.username &&
							(formik.errors.username = res.data.error.username);
						res.data.error.password &&
							(formik.errors.password = res.data.error.password);
					} else {
						handleModals("login", false);
						toast.success(res.data.success.msg, toastObj);
						setUser(res.data.success.user);
					}
					handleModals("loading", false);
				}
			});
		},
	});
	return (
		<div id="login">
			<div className="wrapper">
				<RiDeleteBack2Fill
					className="cross"
					onClick={() => handleModals("login", false)}
				/>
				<form action="#" onSubmit={formik.handleSubmit}>
					<h1>Login</h1>
					<InputField
						fieldName="username"
						placeholder="Email or phone"
						value={formik.values.username}
						type="text"
						isRequired={true}
						onChange={formik.handleChange}
					/>
					<p>
						{formik.errors.username ? formik.errors.username : null}
					</p>
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
					<button className="submit-btn" type="submit">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
