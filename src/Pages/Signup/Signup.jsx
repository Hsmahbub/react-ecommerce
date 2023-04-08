import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SignupApi } from "../../Api Method/auth";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGlobalContext } from "../../context";
import {
    buttonValidator, signupFormValidator
} from "../../utils/formValidation";
import { toastObj } from "../../utils/toastObj";
const Signup = () => {
    const navigate = useNavigate()
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
        setErrors(
            signupFormValidator({
                ...inputValue,
                [e.target.name]: e.target.value,
            })
        );
    };
    const formSubmitHandler = (e) => {
        e.preventDefault();
        handleModals("loading", true,);
        // res from server
        SignupApi(inputValue, (res) => {
            // condition
            if (res.status === 201) {
                navigate('/login')
                toast.success('Signup successfull', toastObj);
            } else {
                console.log(res.data)
                for (const key in JSON.parse(res.data.message)) {
                    const element = JSON.parse(res.data.message)[key];
                    toast.error(element, toastObj);
                }
            }
            handleModals("loading", false);
        });
    };

    // use effect for error handling
    useEffect(() => {
        setErrors({});
    }, []);

    return (
        <div className="container" >
            <input id="signup_toggle" type="checkbox" />
            <form className="form" onSubmit={formSubmitHandler}>
                <div className="form_back">
                    <div className="form_details">SignUp</div>
                    <input
                        className="input-field"
                        name="name"
                        placeholder="Name"
                        type="text"
                        value={inputValue.name}
                        required
                        onChange={changeHandler}
                    />
                    <input
                        type="email"
                        className="input-field"
                        name="email"
                        placeholder="Email"
                        value={inputValue.email}
                        required
                        onChange={changeHandler}
                    />
                    <input
                        type="text"
                        className="input-field"
                        name="phone"
                        value={inputValue.phone}
                        placeholder="Phone"
                        required
                        onChange={changeHandler}
                    />
                    <input
                        className="input-field"
                        name="password"
                        placeholder="Password"
                        type="password"
                        value={inputValue.password}
                        required
                        onChange={changeHandler}
                    />
                    <input
                        className="input-field"
                        name="cPassword"
                        placeholder="Confirm Password"
                        value={inputValue.cPassword}
                        type="password"
                        required
                        onChange={changeHandler}
                    />
                    <p>{errors.cPassword ? errors.cPassword : null}</p>
                    <button className="submit-btn" style={css}
                        disabled={!isDisabled}>Signup</button>
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