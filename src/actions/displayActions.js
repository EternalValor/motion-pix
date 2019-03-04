import { SET_BACKDROP_SIZE } from './types';

export const setBackdropSize = width => {
  let backdropSize;
  if (width > 750) {
    backdropSize = 1280;
  } else if (width > 500) {
    backdropSize = 780;
  } else {
    backdropSize = 500;
  }

  return {
    type: SET_BACKDROP_SIZE,
    payload: backdropSize
  };
};
