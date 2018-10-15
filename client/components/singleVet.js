import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import history from '../history';

class SingleVet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vetProfile: {
        id: 0,
        imgUrl:
          'https://st2.depositphotos.com/4676065/10102/v/450/depositphotos_101023168-stock-illustration-loading-bar-icon.jpg',
        name: '',
        specialty: [],
      },
    };
    this.nextVet = this.nextVet.bind(this);
  }
  componentDidMount() {
    const currentVetId = Number(this.props.match.params.id);
    const currentVet = this.props.vets.filter(vet => vet.id === currentVetId);
    this.setState({
      vetProfile: currentVet[0],
    });
  }
  nextVet() {
    const nextVetId = Number(this.state.vetProfile.id) + 1;
    const nextVet = this.props.vets.filter(vet => vet.id === nextVetId);
    this.setState({
      vetProfile: nextVet[0],
    });
    history.push(`/vets/${nextVetId}`);
  }
  render() {
    const { id, imgUrl, name, specialty } = this.state.vetProfile;
    return id ? (
      <div key={id}>
        <img src={imgUrl} />
        <p>Name: {name}</p>
        <p>Specialties: {specialty.join(' , ')}</p>
        <button type="button" onClick={this.nextVet}>
          {' '}
          Next Vet
        </button>
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
