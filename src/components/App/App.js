import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchHouses } from '../../thunks/fetchHouses';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.fetchHouses('http://localhost:3001/api/v1/houses')
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
        </div>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  fetchHouses: (url) => dispatch(fetchHouses(url))
})

export default connect(null, mapDispatchToProps)(App);
