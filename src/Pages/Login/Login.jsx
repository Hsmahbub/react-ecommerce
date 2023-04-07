import React, { useEffect, useState } from 'react'
import './login.scss'
import { Link, useNavigate } from 'react-router-dom'
import { LoginApi } from '../../Api Method/auth';
import { useGlobalContext } from '../../context';
import { buttonValidator, loginFormValidator } from '../../utils/formValidation';
import { toast } from 'react-toastify';
import { toastObj } from '../../utils/toastObj';

const Login = () => {
    const initial = {
        username: "",
        password: "",
    };
    const navigate = useNavigate()
    const { handleModals, setCartData, setUser } = useGlobalContext()
    const [inputData, setInputData] = useState(initial);
    const [errors, setError] = useState({});
    const { isDisabled, css } = buttonValidator(errors);
    const handleChange = (e) => {
        setInputData(p => ({ ...p, [e.target.name]: e.target.value }));
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
            if (res?.status === 200) {
                setCartData(res.data.cart)
                setUser(res.data.user)
                navigate('/')
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
        <div className="container" >
            <input id="signup_toggle" type="checkbox" />
            <form className="form" onSubmit={handleSubmit}>
                <div className="form_front">
                    <div className="form_details">Login</div>
                    <input
                        type="text"
                        onChange={handleChange}
                        value={inputData.username}
                        // isRequired={true}
                        name='username'
                        className="input-field"
                        placeholder="Username"
                    />
                    <input
                        type="password"
                        onChange={handleChange}
                        className="input-field"
                        placeholder="Password"
                        name='password'
                        value={inputData.password}
                    // isRequired={true}
                    />
                    <button className="submit-btn" style={css} disabled={!isDisabled} type='submit'>Login</button>
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