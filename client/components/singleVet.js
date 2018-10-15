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
  }
  render() {}
}

const mapState = state => {
  return {
    vets: state.vets.vets,
    user: state.user,
  };
};

export default connect(mapState, null)(SingleVet);
