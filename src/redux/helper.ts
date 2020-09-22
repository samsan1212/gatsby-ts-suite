/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Reducer } from "redux";

export function toReducer<T>(type: string, defaultValue: T): Reducer<T, AppAction<T>> {
    return (state = defaultValue, action) => {
        if (action && action.type === type) {
            return action.payload;
        }
        return state;
    };
}

export function toActionCreator<T = undefined>(type: string, noPayload: true): AppActionCreatorWithoutPayload
export function toActionCreator<T>(type: string, noPayload?: false): AppActionCreator<T>
export function toActionCreator<T>(type: string, noPayload = false) {
    if (noPayload) {
        return () => ({ type })
    }
    return (payload: T) => ({ type, payload });
}

export const toType = (prefix: string) => (actionName: string): string => `${prefix}::${actionName}`;