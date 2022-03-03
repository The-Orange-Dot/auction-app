import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import defaultProfilePic from "../../database/images/default-profile-pic.jpeg";

const RegisterNewUser = () => {
  const history = useHistory();
  const [input, setInput] = useState({
    username: "",
    password: "",
    password_confirmation: "",
    email: "",
    picture: defaultProfilePic,
    firstName: "",
    lastName: "",
    dob: "",
  });
  const [errors, setErrors] = useState([]);

  //Tracks input inside the text boxes
  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  //Submits and creates new user
  const newUserSubmit = (e) => {
    e.preventDefault();
    fetch("https://boiling-forest-19458.herokuapp.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    }).then((r) => {
      if (r.ok) {
        r.json().then((newUser) => {
          history.push("/login");
          console.log(newUser);
        });
      } else {
        r.json().then((res) => {
          console.log(res.errors);
          setErrors(res.errors);
        });
      }
    });
  };

  return (
    <div className="registration-page-container">
      <div className="registration-form-container">
        <h1>Register with MOXIE!</h1>
        <form action="" onSubmit={newUserSubmit} className="registration-form">
          <div>
            <label htmlFor="username">*Username: </label>
            <input
              type="text"
              name="username"
              onChange={inputHandler}
              placeholder="5-15 characters"
              maxLength="15"
              required
            />
          </div>
          <div>
            <label htmlFor="password">*Password: </label>
            <input
              type="password"
              name="password"
              onChange={inputHandler}
              placeholder="8 characters minimum"
              required
            />
          </div>
          <div>
            <label htmlFor="password_confirmation">
              *Password-Confirmation:
            </label>
            <input
              type="password"
              name="password_confirmation"
              onChange={inputHandler}
              placeholder="8 characters minimum"
              required
            />
          </div>
          <div>
            <label htmlFor="email">*Email: </label>
            <input
              type="email"
              name="email"
              onChange={inputHandler}
              placeholder="E.g. moxie@gmail.com"
              required
            />
          </div>
          <div>
            <label htmlFor="firstName">First Name: </label>
            <input
              type="text"
              name="firstName"
              onChange={inputHandler}
              placeholder="E.g. Julie"
              maxLength="20"
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name: </label>
            <input
              type="text"
              name="lastName"
              onChange={inputHandler}
              placeholder="E.g. Moxieson"
              maxLength="20"
            />
          </div>
          <div>
            <label htmlFor="dob">*Date of Birth: </label>
            <input type="date" name="dob" onChange={inputHandler} required />
          </div>
          <div className="submit-btn">
            <input type="submit" className="login-btn" />
          </div>
        </form>
        <small>* required fields</small>
        <div className="register-errors">
          {errors.map((error) => {
            return <small key={errors.length}>{error}</small>;
          })}
        </div>
      </div>
    </div>
  );
};

export default RegisterNewUser;
