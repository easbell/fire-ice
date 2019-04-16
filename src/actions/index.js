export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  bool
});

export const setHouses = (houses) => ({
  type: 'SET_HOUSES',
  houses
});

export const hasError = (message) => ({
  type: 'HAS_ERROR',
  message
});