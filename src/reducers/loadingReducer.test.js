import loadingReducer from './loadingReducer';
import * as actions from '../actions';

describe('loadingReducer', () => {
  it('should return the initial state', () => {
    const expected = false;
    const result = loadingReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return state with a boolean', () => {
    const action = actions.isLoading(true);
    const result = loadingReducer(undefined, action);
    expect(result).toEqual(true);
  });
});