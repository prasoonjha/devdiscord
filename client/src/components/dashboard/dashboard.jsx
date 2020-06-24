import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getCurrentProfile } from "../../actions/profile";

import SpinnerComponent from "../layout/spinner";
import Button from "../UIElements/button";

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  return loading && profile === null ? (
    <SpinnerComponent />
  ) : (
    <React.Fragment>
      <h1>Welcome to your Dashboard, {user && user.name} !</h1>
      {profile ? (
        <React.Fragment>has</React.Fragment>
      ) : (
        <React.Fragment>
          <p>You haven't set up a profile yet, please add some info!</p>
          <Button to="/create-profile">Create profile</Button>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
