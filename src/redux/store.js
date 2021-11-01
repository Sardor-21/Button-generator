import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootreducer from "./Reducers/Rootreducer";

const store = createStore(
  rootreducer,
  composeWithDevTools(applyMiddleware(...[thunk]))
);
const dispatch = store.dispatch;
export { dispatch };
export default store;
