import { AnyAction, combineReducers, Reducer } from "redux";

import { SET_ACTION } from "@/redux/action/type/types";

const sample: Reducer<number, AnyAction> = (state = 0, action) => {
    if (action && action.type === SET_ACTION) {
        return 1;
    }
    return state;
};

export default combineReducers({
    sample,
});
