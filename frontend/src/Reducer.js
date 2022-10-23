import { combineReducers } from "redux";

// import new reducer
import { signupReducer } from "./components/signup/SignupReducer";
import { loginReducer } from "./components/login/LoginReducer";

const createRootReducer = combineReducers({
  createUser: signupReducer,
  auth: loginReducer
});

export default createRootReducer;
