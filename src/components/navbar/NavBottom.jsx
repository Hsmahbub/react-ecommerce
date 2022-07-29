
import { useGlobalContext } from "../../context";
import { LogoutApi } from "../../Database Managment/auth";
import { Links } from "./Navbar";
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
export const NavBottom = ({ width, link, link2, logout }) => {
	return (
		<div className="nav-bottom">
			<div className="links toggleMenu" style={{ width: width }}>
				<Links styles={"menu-item"} link={link} link2={link2} logout={logout} />
			</div>
		</div>
	);
};
