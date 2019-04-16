import houseReducer from './houseReducer';
import * as actions from '../actions';

describe('houseReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = houseReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return state with a houses array', () => {
    const mockHouses = ['house', 'house'];
    const action = actions.setHouses(mockHouses);
    const result = houseReducer(undefined, action);
    expect(result).toEqual(mockHouses);
  });
});