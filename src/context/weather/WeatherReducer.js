import {
    GET_WEATHER,
    FETCH_ERROR
  } from '../../types';
  
  export default (state, action) => {
    switch (action.type) {
      case GET_WEATHER:
        return {
          ...state,
          weather: action.payload,
        };
      case FETCH_ERROR:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  }