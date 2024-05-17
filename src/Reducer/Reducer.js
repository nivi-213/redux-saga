
import {
  FETCH_DATA_SUCCESS,
  CREATE_DATA_SUCCESS,
  UPDATE_DATA_SUCCESS,
  DELETE_DATA_SUCCESS,
} from './ActionType';

const initialState = {
  saga: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        saga: action.payload,
      };
    case CREATE_DATA_SUCCESS:
      return {
        ...state,
        saga: [...state.saga, action.payload],
      };
    case UPDATE_DATA_SUCCESS:
      return {
        ...state,
        saga: state.saga.map(item =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case DELETE_DATA_SUCCESS:
      return {
        ...state,
        saga: state.saga.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
