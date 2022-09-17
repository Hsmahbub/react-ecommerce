import React from "react";
import "./topHeader.css";
import { IoIosCall } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Contact = ({ contact, icon, classes }) => (
	<div className={classes}>
		<span>{icon}</span>
		<span>{contact}</span>
	</div>
);

const Social = ({ classes, icon }) => (
	<div className={classes}>
		<span>{icon}</span>
	</div>
);

function Topheader() {
	return (
		<div className="top__header section__padding">
			<div className="leftSide">
				<Contact
					classes="phone"
					contact={"+ 123 456 789"}
					icon={<IoIosCall className="callIcon" />}
				/>
				<Contact
					classes="mail"
					contact={"info@company.com"}
					icon={<AiOutlineMail className="mailIcon" />}
				/>
			</div>
			<div className="rightSide">
        <Social classes="socials" icon={<FaFacebookF/>}/>
        <Social classes="socials" icon={<FaTwitter/>}/>
        <Social classes="socials" icon={<FaInstagram/>}/>
        <Social classes="socials" icon={<FaLinkedinIn/>}/>
        <Social classes="socials" icon="Be"/>
      </div>
		</div>
	);
}

export default Topheader;
