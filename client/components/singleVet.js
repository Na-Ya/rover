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
    const { id, imgUrl, name, specialty } = this.state.vetProfile;
    return id ? (
      <div key={id}>
        <img src={imgUrl} />
        <p>Name: {name}</p>
        <p>Specialties: {specialty.join(' , ')}</p>
        <Link to={`/vets/${id + 1}`}> Next Vet </Link>
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
