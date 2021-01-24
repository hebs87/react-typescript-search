import {combineReducers} from "redux";
import repositoriesReducer from "./repositoriesReducer";

const rootReducer = combineReducers({
  repositories: repositoriesReducer,
});

export default rootReducer;

// This is required to allow redux to work with TypeScript - for the useSelector hook
export type RootState = ReturnType<typeof rootReducer>;
