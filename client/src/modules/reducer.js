import ACTIONS from "./actions";
import _ from "lodash";

const defaultState = {
  items: []
};

const restaurantsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.GET_RESTAURANTS:{
        return {
            items: action.payload
        }
    }

    default:
      return state;
  }
};

export default restaurantsReducer;