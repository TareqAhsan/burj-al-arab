import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useFirebase from "../../hooks/useFirebase";

import "./Login.css";

const Login = () => {
  const { signInUsingGoogle } = useAuth();

  return (
    <div className="login-form">
      <div>
        <h2>Please Login</h2>
        <div>
          <input type="email" placeholder="enter email" />
          <br />
          <input type="password" />
          <br />
          <p>
            New in Burj al Arab <Link to="/register">Register</Link>
          </p>
          <button onClick={signInUsingGoogle} type="submit">
            Sign in with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
