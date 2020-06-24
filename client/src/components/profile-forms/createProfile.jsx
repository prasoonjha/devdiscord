import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Button from "../UIElements/button";

const CreateProfile = () => {
  const [formData, setFormData] = useState({
    company: "",
    location: "",
    website: "",
    bio: "",
    skills: "",
    status: "",
    githubusername: "",
    youtube: "",
    twitter: "",
    instagram: "",
    linkedin: "",
    facebook: "",
  });

  const {
    company,
    location,
    website,
    bio,
    skills,
    status,
    githubusername,
    youtube,
    twitter,
    instagram,
    linkedin,
    facebook,
  } = formData;

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="form-container">
      <div className="form-title">
        <h2 className="">Create yor profile</h2>
        <p>Let's get some information to make yourprofile stand out!</p>
      </div>
      <form className="form-body">
        <select name="status">
          <option value="0">* Select professional status</option>
          <option value="Developer">Developer</option>
          <option value="Junior developer">Junior developer</option>
          <option value="Senior developer">Senior developer</option>
          <option value="Manager">Manager</option>
          <option value="Student">Student</option>
          <option value="Instructor">Instructor</option>
          <option value="Intern">Intern</option>
          <option value="Other">Other</option>
        </select>
        {/* <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleChange}
          required
        /> */}
        <div className="button-container">
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </form>
    </div>
  );
};

CreateProfile.propTypes = {};

export default CreateProfile;
