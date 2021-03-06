import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { setAuthData } from "../util/axiosConfig";
import { setUser } from "./actions/actionCreators";
import authReducer from "./reducers/auth";
import displayReducer from "./reducers/display";
import stationsReducer from "./reducers/stations";

const rootReducer = combineReducers({
    auth: authReducer,
    display: displayReducer,
    stations: stationsReducer,
});

const store = createStore(
    rootReducer,
    composeWithDevTools({ trace: true })(applyMiddleware(thunk))
);

const userRaw = localStorage.getItem("jwt");
if (userRaw) {
    const { token, user } = JSON.parse(userRaw);
    setAuthData(token, user);
    store.dispatch(setUser(user));
}

export default store;
