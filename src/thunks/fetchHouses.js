import { isLoading, setHouses, hasError } from '../actions';

export const fetchHouses = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(isLoading(false));
      const data = await response.json();
      dispatch(setHouses(data))
    } catch (error) {
      dispatch(hasError(error.message));
    }
  }
}