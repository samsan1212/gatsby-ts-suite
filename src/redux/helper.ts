import { Reducer, ActionCreator, Action } from "redux";

export function toReducer<T>(type: string, defaultValue: T): Reducer<T, AppAction<T>> {
    return (state = defaultValue, action) => {
        if (action && action.type === type && action.payload) {
            return action.payload;
        }
        return state;
    };
}

export function toActionCreator(type: string, noPayload: true): ActionCreator<Action<string>>
export function toActionCreator<T>(type: string): ActionCreator<AppAction<T>>
export function toActionCreator<T>(type: string, noPayload = false) {
    if (noPayload) {
        return () => ({ type })
    }
    return (payload: T) => ({ type, payload });
}

export const toType = (prefix: string) => (actionName: string): string => `${prefix}::${actionName}`;
