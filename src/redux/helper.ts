import { Reducer, ActionCreator } from "redux";

export function toReducer<T>(type: string, defaultValue: T): Reducer<T, AppAction<T>> {
    return (state = defaultValue, action) => {
        if (action && action.type === type) {
            return action.payload;
        }
        return state;
    };
}

export function toActionCreator<T = {}>(type: string): ActionCreator<AppAction<T>> {
    return (payload: T = ({} as any)) => ({ type, payload });
}

export const toType = (prefix: string) => (actionName: string) => `${prefix}::${actionName}`;