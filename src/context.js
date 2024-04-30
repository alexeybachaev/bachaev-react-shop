import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isCartShow: false,
  displayName: "",
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.closeAlert = () => {
    dispatch({ type: "CLOSE_ALERT" });
  };

  value.removeFromCart = (itemId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { mainId: itemId } });
  };

  value.addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  value.incQuantuty = (itemId) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: { mainId: itemId } });
  };

  value.decQuantuty = (itemId) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: { mainId: itemId } });
  };

  value.handleCartShow = () => {
    dispatch({ type: "TOGGLE_CART" });
  };

  value.setGoods = (data) => {
    dispatch({ type: "SET_GOODS", payload: data });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
