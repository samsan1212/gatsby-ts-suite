import { AnyAction, combineReducers, Reducer } from "redux";
import { createReducer } from "@/redux/helper";

import { SET_ACTION } from "@/redux/action/type/types";

const sample = createReducer(SET_ACTION, 0)

export default combineReducers<ReduxStore>({
    sample,
});
