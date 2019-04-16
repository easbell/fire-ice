import React, { Component } from 'react'
import { connect } from 'react-redux';
import { House } from '../House/House';
import './HouseContainer.css';

export class HouseContainer extends Component {
  renderCards = () => {
    const { houses } = this.props;
    return houses.map(house => (
      <House key={house.name} {...house} />
    ))
  }

  render() {
    return (
      <div className='container'>
        {this.renderCards()}
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  houses: state.houses
});

export default connect(mapStateToProps)(HouseContainer);