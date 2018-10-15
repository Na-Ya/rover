import React from 'react';
import { connect } from 'react-redux';

/**
 * COMPONENT
 */
export const UserHome = props => {
  const { email, petName } = props;

  return (
    <div>
      <h3>
        Welcome, {email}! We hope {petName} is doing okay!
      </h3>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    petName: state.user.petName,
  };
};

export default connect(mapState)(UserHome);
