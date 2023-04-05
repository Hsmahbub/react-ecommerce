import React from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
    return (
        <div className="container" >
            <input id="signup_toggle" type="checkbox" />
            <form className="form">
                <div className="form_back">
                    <div className="form_details">SignUp</div>
                    <input type="text" className="input-field" placeholder="Firstname" />
                    <input type="text" className="input-field" placeholder="Username" />
                    <input type="text" className="input-field" placeholder="Password" />
                    <input type="text" className="input-field" placeholder="Confirm Password" />
                    <button className="submit-btn">Signup</button>
                    <span className="switch">Already have an account?
                        <Link to={'/login'}>
                            <span className="signup_tog">
                                Sign In
                            </span>
                        </Link>
                    </span>
                </div>
            </form>
        </div>
    )
}

export default Signup