import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { createProfile } from "../../actions/profile";

import Button from "../UIElements/button";

import "./createProfile.css";

const CreateProfile = ({ createProfile, history }) => {
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
    createProfile(formData, history);
  };

  return (
    <div className="form-container">
      <div className="form-title">
        <h2 className="">Create yor profile</h2>
        <p>Let's get some information to make yourprofile stand out!</p>
      </div>
      <form className="form-body">
        <select name="status" value={status} onChange={handleChange}>
          <option value="0">Select professional status</option>
          <option value="Developer">Developer</option>
          <option value="Junior developer">Junior developer</option>
          <option value="Senior developer">Senior developer</option>
          <option value="Manager">Manager</option>
          <option value="Student">Student</option>
          <option value="Instructor">Instructor</option>
          <option value="Intern">Intern</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="text"
          placeholder="Company"
          name="company"
          value={company}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Location"
          name="location"
          value={location}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Website"
          name="website"
          value={website}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Skills"
          name="skills"
          value={skills}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Github username"
          name="githubusername"
          value={githubusername}
          onChange={handleChange}
          required
        />
        <textarea
          type="text"
          placeholder="A short bio of yourself"
          name="bio"
          value={bio}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="LinkedIn URL"
          name="linkedin"
          value={linkedin}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Youtube URL"
          name="youtube"
          value={youtube}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Twitter URL"
          name="twitter"
          value={twitter}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Instagram URL"
          name="instagram"
          value={instagram}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Facebook URL"
          name="facebook"
          value={facebook}
          onChange={handleChange}
        />
        <div className="button-container">
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </form>
    </div>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
