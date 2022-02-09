import React, { useState } from "react";

const RegisterNewUser = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    dob: "",
  });

  const inputHandler = (e) => {
    console.log(`${e.target.name}: ${e.target.value}`);
    setInput({ [e.target.name]: e.target.value });
  };

  const newUserSubmit = () => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });
  };

  return (
    <div>
      <form action="" onSubmit={newUserSubmit}>
        <input type="text" name="username" onChange={inputHandler} required />
        <input
          type="password"
          name="password"
          onChange={inputHandler}
          required
        />
        <input type="text" name="email" onChange={inputHandler} required />
        <input type="text" name="firstName" onChange={inputHandler} required />
        <input type="text" name="lastName" onChange={inputHandler} required />
        <input type="text" name="dob" onChange={inputHandler} required />
      </form>
    </div>
  );
};

export default RegisterNewUser;
