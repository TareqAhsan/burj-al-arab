import React from 'react';
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Please Register</h2>
                <form>
                    <input type="email" placeholder="enter email" id=""/>
                    <br />
                    <input type="text" placeholder="enter name" id=""/>
                    <br />
                    <input type="password" placeholder="enter password" name="" id="" />
                    <br />
                    <input type="password" placeholder="retype password" name="" id="" />
                    <br />
                    <p>Already have an account? <Link to ="/login">Login</Link></p>
                    <button type="submit">Sign in with google</button>
                </form>
            </div>
        </div>
    );
};

export default Register;