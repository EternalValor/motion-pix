import { SET_BACKDROP_SIZE } from './types';

export const setBackdropSize = width => {
  let backdropSize;
  let smallBackdropSize;
  if (width > 750) {
    backdropSize = 1280;
    smallBackdropSize = 780;
  } else if (width > 500) {
    backdropSize = 780;
    smallBackdropSize = 500;
  } else {
    backdropSize = 500;
    smallBackdropSize = 500;
  }

  return {
    type: SET_BACKDROP_SIZE,
    payload: { backdropSize, smallBackdropSize }
  };
};
