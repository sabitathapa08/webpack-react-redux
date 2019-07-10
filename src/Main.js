import React from 'react';
import { connect } from 'react-redux';
import Rootreducers from '../reducers';
import { compose } from 'redux';

class Main extends React.Component {

  componentDidMount() {
    console.log('here-----');
  }
  
  render() {
    // const stateProps = this.props.store.getState();
    return (
      <div>
        <div>Hello World!!</div>
        <p>Let's Code</p>
      </div>
    )
  }
}

export default Main;