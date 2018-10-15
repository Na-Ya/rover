import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SingleVet extends Component {
  constructor(props) {
    super(props);
    this.state = { vetProfile: {} };
  }
  componentDidMount() {
    const currentVetId = Number(this.props.match.params.id);
    const currentVet = this.props.vets.filter(vet => vet.id === currentVetId);
    console.log(currentVet[0]);
    this.setState({
      vetProfile: currentVet[0],
    });
  }
  render() {
    return this.state.vetProfile.id ? (
      <div key={this.state.vetProfile.id}>
        <img src={this.state.vetProfile.imgUrl} />
        <p>Name: {this.state.vetProfile.name}</p>
        <p>Specialties: {this.state.vetProfile.specialty.join(' , ')}</p>
      </div>
    ) : (
      'Loading'
    );
  }
}

const mapState = state => {
  return {
    vets: state.vets.vets,
    user: state.user,
  };
};

export default connect(mapState, null)(SingleVet);
