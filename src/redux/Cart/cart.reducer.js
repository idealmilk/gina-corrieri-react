import cartTypes from './cart.types';

const INITIAL_STATE = {
  cartItems: []
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case cartTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          {
            ...action.payload
          }
        ]
      }
    default:
      return state;
  }
};

export default cartReducer;
