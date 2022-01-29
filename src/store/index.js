import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { sideBar } from "./reducers/sideBar";
import { catPage } from "./reducers/catPage";

const rootReducer = combineReducers({
  sideBar,
  catPage,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
