import React, { useState } from "react";
import { useHistory } from "react-router";
import "./Login.css";

const Login = ({ setUser, setLoggedIn }) => {
  const history = useHistory();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [failedLogin, setFailedLogin] = useState(false);
  const [loginError, setLoginError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
          setLoggedIn(true);
          setFailedLogin(false);
          history.push("/browse");
          console.log(user);
        });
      } else {
        r.json().then((error) => setLoginError(Object.values(error)));
        setFailedLogin(true);
      }
    });
  };

  const inputHandler = (e) => {
    // console.log(`${e.target.name}: ${e.target.value}`);
    setInput({ [e.target.name]: e.target.value });
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
            placeholder="Password (not implemented)"
            onChange={inputHandler}
          />
          <input type="submit" className="login-btn" />
        </form>
        <button className="login-btn">Register new account</button>
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
