import CartActionTypes from "../cart/cart.types";
import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, actions) => {
  switch (CartActionTypes.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: actions.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
