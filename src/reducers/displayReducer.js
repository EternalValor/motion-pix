import { SET_BACKDROP_SIZE } from '../actions/types';

const initialState = {
  backdropSize: 0,
  smallBackdropSize: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_BACKDROP_SIZE:
      return {
        ...state,
        backdropSize: action.payload.backdropSize,
        smallBackdropSize: action.payload.smallBackdropSize
      };
    default:
      return state;
  }
}
