import { Reducer, ActionCreator } from "redux";

export function createReducer<T>(type: string, defaultValue: T): Reducer<T, AppAction<T>> {
    return (state = defaultValue, action) => {
        if (action && action.type === type) {
            return action.payload;
        }
        return state;
    };
}

export function actionCreator<T = {}>(type: string): ActionCreator<AppAction<T>> {
    return (payload: T = ({} as any)) => ({ type, payload });
}

export const getActionType = (prefix: string) => (actionName: string) => `${prefix}::${actionName}`;