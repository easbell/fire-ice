import errorReducer from './errorReducer';
import * as actions from '../actions';

describe('errorReducer', () => {
  it('should return the initial state', () => {
    const expected = '';
    const result = errorReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return state with a message', () => {
    const action = actions.hasError('error');
    const result = errorReducer(undefined, action);
    expect(result).toEqual('error');
  });
});