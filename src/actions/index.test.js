import * as actions from './index';

describe('actions', () => {
  it('should have a type of IS_LOADING', () => {
    const expected = {
      type: 'IS_LOADING',
      bool: true
    }
    const result = actions.isLoading(true);
    expect(result).toEqual(expected);
  });

  it('should have a type of SET_HOUSES', () => {
    const mockHouses = ['house1', 'house2']
    const expected = {
      type: 'SET_HOUSES',
      houses: mockHouses
    }
    const result = actions.setHouses(mockHouses);
    expect(result).toEqual(expected);
  });

  it('should have a type of HAS_ERROR', () => {
    const expected = {
      type: 'HAS_ERROR',
      message: 'something went wrong'
    }
    const result = actions.hasError('something went wrong');
    expect(result).toEqual(expected);
  });
});