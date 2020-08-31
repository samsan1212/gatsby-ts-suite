import { combineReducers } from "redux";
import { toReducer } from "@/redux/helper";

import { SET_ACTION } from "@/redux/action/type/types";

const sample = toReducer(SET_ACTION, 0)

export default combineReducers<ReduxStore>({
    sample,
});
