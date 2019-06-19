import ACTIONS from "../actions/restaurants";
import _ from "lodash";

const defaultState = {
  items: [],
  removedPayments: {}
};

const restaurantsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.GET_RESTAURANTS:{
      return defaultState;
    }
    case ACTIONS.Types.RECEIVED_RESTAURANTS:{
        return {
            ...state,
            items: action.payload.data.data
        }
    }
    case ACTIONS.Types.SET_ORDER_BY:{
        return {
          ...state,
          orderBy: action.orderBy
        }
    }
    case ACTIONS.Types.TOGGLE_FILTER:{
      return{
        ...state,
        removedPayments:{
          ...state.removedPayments,
          [action.filter] : !state.removedPayments[action.filter]
        }
      }
    }
    default:
      return state;
  }
};

export default restaurantsReducer;