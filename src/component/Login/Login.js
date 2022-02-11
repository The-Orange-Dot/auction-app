import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = ({ setUser, setLoggedIn, setPageLoaded }) => {
  const history = useHistory();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [failedLogin, setFailedLogin] = useState(false);
  const [loginError, setLoginError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    fetch("https://boiling-forest-19458.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
      body: JSON.stringify(input),
    }).then((r) => {
      if (r.ok) {
        r.json().then((resp) => {
          localStorage.setItem("user", resp.cookies.user);
          fetch("https://boiling-forest-19458.herokuapp.com/user", {
            //THIS HEADER IS A TEMP FIX FOR LOGIN RENDER!!!
            headers: {
              user: localStorage.getItem("user"),
            },
          }).then((r) => {
            if (r.ok) {
              r.json().then((userData) => {
                setUser(userData);
                setLoggedIn(true);
                setFailedLogin(false);
                setPageLoaded(true);
              });
            } else {
              setLoggedIn(false);
            }
          });
        });
        history.push("/browse");
      } else {
        r.json().then((error) => setLoginError(Object.values(error)));
        setFailedLogin(true);
      }
    });
  };

  const inputHandler = (e) => {
    // console.log(`${e.target.name}: ${e.target.value}`);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-page-container">
      <div className="login-form-container">
        <h1>Login</h1>
        <form action="" onSubmit={submitHandler}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={inputHandler}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={inputHandler}
          />
          <input type="submit" className="login-btn" />
        </form>
        <Link to="/register">
          <button className="login-btn">Register new account</button>
        </Link>
        {failedLogin ? (
          <div style={{ color: "red" }} className="login-error-message">
            <h5>{loginError}</h5>
          </div>
        ) : (
          <br />
        )}
      </div>
    </div>
  );
};

export default Login;
