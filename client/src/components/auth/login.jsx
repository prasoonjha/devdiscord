import React, { useState } from "react";

import Button from "../UIElements/button";
import "./login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert("success");
  };

  return (
    <React.Fragment>
      <div className="form-container">
        <div className="form-title">
          <h2 className="">Log in to your account.</h2>
        </div>
        <form className="form-body" action="">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
          <div className="button-container">
            <Button onClick={handleSubmit}>Login</Button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;
