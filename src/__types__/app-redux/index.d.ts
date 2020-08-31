import { Action } from "redux";

// store state
import { Store } from "./store";

declare global {

  interface AppAction<T = any> extends Action<string> {
    payload: T;
  }

  type ReduxStore = Readonly<Store>

}

