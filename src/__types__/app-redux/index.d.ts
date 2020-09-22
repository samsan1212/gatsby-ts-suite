import { Action } from "redux";

// store state
import { Store } from "./store";

declare global {

  interface AppActionCreator<T> {
    (payload: T): AppAction<T>
  }

  interface AppActionCreatorWithoutPayload {
    (): Action<string>
  }

  interface AppAction<T = unknown> extends Action<string> {
    payload: T;
  }

  type ReduxStore = Readonly<Store>

}

