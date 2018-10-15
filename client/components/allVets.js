import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class AllVets extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return this.props.vets.map(singleVet => {
      return (
        <div key={singleVet.id}>
          <img src={singleVet.imgUrl} />
          <p>Name: {singleVet.name}</p>
          <p>Specialties: {singleVet.specialty.join(' , ')}</p>
          <Link to={`/vets/${singleVet.id}`}> View Vet Profile</Link>
        </div>
      );
    });
  }
}

const mapState = state => {
  return {
    vets: state.vets.vets,
    user: state.user,
  };
};

export default connect(mapState, null)(AllVets);
