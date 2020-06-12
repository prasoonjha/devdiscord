import React, { useState } from "react";

import Button from "../UIElements/button";
import "./register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;

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
          <h2 className="">Sign Up!</h2>
          <p>Create your account. It's free. Now and forever!</p>
        </div>
        <form className="form-body">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
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
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Register;
