import thunk from "redux-thunk";
import * as api from "./lib/apiRequest";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import cartReducer from "./Redcuer/CartReducer";

let composeEnhancers = compose;
function createReducer(asyncReducer) {
  return combineReducers({
    cartReducer
  });
}
let store = createStore(
  createReducer(),
  composeEnhancers(
    applyMiddleware(
      thunk.withExtraArgument({
        api
      })
    )
  )
);
export default store;
