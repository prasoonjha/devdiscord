import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Button from "../UIElements/button";

import { setAlert } from "../../actions/alert";

import "./register.css";

const Register = ({ setAlert }) => {
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
    setAlert("Successfully registered", "success");
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

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Register);
