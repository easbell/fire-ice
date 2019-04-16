import React from 'react';
import { HouseContainer, mapStateToProps } from './HouseContainer';
import { shallow } from 'enzyme';

describe('HouseContainer', () => {
  describe('mapStateToProps', () => {
    it('should return an object with loading', () => {
      const mockState = {
        houses: ['house', 'house'],
        loading: true,
        other: 'other'
      }
      const expected = {houses: ['house', 'house']}
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected)
    });
  });
});