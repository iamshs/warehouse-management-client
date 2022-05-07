import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link,  useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        
        hookError,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

    const [userInfo,  setUserInfo] = useState({
        email: "",
        pass: "",
        confirmPass: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        pass: "",
        confirmPass: "",

    });

    //handling Email
    const handleEmail = e => {
        const emailRegex = /\S+@\S+\.\S+/
        const validEmail = emailRegex.test(e.target.value)
        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value })
            setErrors({ ...errors, email: "" })
        }
        else {
            setErrors({ errors, email: "Your Email is Invalid" })
            setUserInfo({ ...userInfo, email: "" })
        }

    }

    // password----handling

    const handlePass = e => {
        const passRegex = /.{8,}/;
        const validPass = passRegex.test(e.target.value)
        if (validPass) {
            setUserInfo({ ...userInfo, pass: e.target.value })
            setErrors({ ...errors, pass: '' })
        }
        else {
            setErrors({ ...errors, pass: 'Your password must be at least 8 character' })
            setUserInfo({ ...userInfo, pass: '' })
        }
    }

    //handling confirm password   
    const handleConfirmPass = e => {
        if (e.target.value === userInfo.pass) {
            setUserInfo({ ...userInfo, confirmPass: e.target.value })
            setErrors({ ...errors, confirmPass: "" })
        }
        else {
            setErrors({ ...errors, confirmPass: "Your password did not match" })
            setUserInfo({ ...userInfo, confirmPass: "" })
        }
    }
    //handling signup
    const handleSignUp = e => {
        e.preventDefault()
        createUserWithEmailAndPassword(userInfo.email, userInfo.pass)
    }
   
    

    //handling private route navigation
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user]);

    //handling hookError
    useEffect(() => {
        if (hookError) {
            switch (hookError?.code) {
                case "auth/invalid-email":
                    toast("Invalid email provided, please provide a valid email");
                    break;
                case "auth/invalid-password":
                    toast("Wrong password. Intruder!!");
                    break;
                default:
                    toast("something went wrong");
            }
        }
    }, [hookError])
    return (
        <div className="login-container">
            <div className="login-title">Sign up</div>
            <form className="login-form" onSubmit={handleSignUp}>
                <input type="text" placeholder="Your Email" onChange={handleEmail} required/>
                {errors?.email && <p className="error-message">{errors.email}</p>}
                <input type='password' placeholder="password" onChange={handlePass} required />
                {errors?.pass && <p className="error-message">{errors.pass}</p>}
                <input type="password" placeholder="confirm password" onChange={handleConfirmPass} required />
                {errors?.confirmPass && <p className="error-message">{errors.confirmPass}</p>}

                <button className='login-button' type='submit'>Sign up</button>
                <p>
                 Already have an account? <Link to="/login">Login</Link>
                </p>


                <ToastContainer />
            </form>
        </div>
    );
};

export default Signup;