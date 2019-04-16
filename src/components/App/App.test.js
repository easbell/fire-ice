import React from 'react';
import { App, mapDispatchToProps, mapStateToProps } from './App';
import { fetchHouses } from '../../thunks/fetchHouses';
import { setHouses } from '../../actions';

jest.mock('../../thunks/fetchHouses');

describe('App', () => {
  describe('mapStateToProps', () => {
    it('should return an object with loading', () => {
      const mockState = {
        loading: true,
        other: 'other'
      }
      const expected = {loading: true}
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected)
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with fetchHouses', async () => {
      const mockDispatch = jest.fn()
      const mockUrl = 'www.website.com'
      const thunk = await fetchHouses(mockDispatch());

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.fetchHouses(mockUrl);
      
      expect(mockDispatch).toHaveBeenCalledWith(thunk);
    });
  });
});