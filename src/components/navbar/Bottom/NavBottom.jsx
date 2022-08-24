import { useGlobalContext } from "../../../context";
import { LogoutApi } from "../../../Database Managment/auth";
import { Links } from "../Links";
import "./navbottom.scss";
export const Profile = ({ styleClass }) => {
	const { loginData, setLoginData } = useGlobalContext();
	const profile = loginData;
	return (
		<>
			{
				<div className={styleClass}>
					<img
						src="https://springer-hagen.de/wp-content/uploads/2017/03/testy3-1-1.png"
						width="70px"
						height={"70px"}
						alt="img"
					/>
					<h4>{profile.username}</h4>
					<p>{profile.email}</p>
					<p
						className="logout"
						onClick={() => {
							LogoutApi();
							setLoginData("");
						}}
					>
						logout
					</p>
				</div>
			}
		</>
	);
};
export const NavBottom = ({ width, singup, login, logout }) => {
	return (
		<div className="nav-bottom">
			<div className="links toggleMenu" style={{ width: width }}>
				<Links
					styles={"menu-item"}
					singup={singup}
					link2={login}
					logout={logout}
				/>
			</div>
		</div>
	);
};
