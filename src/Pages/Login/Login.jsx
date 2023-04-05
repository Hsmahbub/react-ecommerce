import React from 'react'
import './login.scss'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div className="container" >
            <input id="signup_toggle" type="checkbox" />
            <form className="form">
                <div className="form_front">
                    <div className="form_details">Login</div>
                    <input type="text" className="input-field" placeholder="Username" />
                    <input type="text" className="input-field" placeholder="Password" />
                    <button className="submit-btn">Login</button>
                    <span className="switch">Don't have an account?
                        <Link to={'/signup'}>
                            <span className='signup_tog'>
                                Sign Up
                            </span>
                        </Link>
                    </span>
                </div>
            </form>
        </div>
    )
}

export default Login