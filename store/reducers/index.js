import { combineReducers } from "redux";
import coffeeReducer from "./coffeeReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
  coffeeReducer: coffeeReducer,
  cartReducer: cartReducer
});
