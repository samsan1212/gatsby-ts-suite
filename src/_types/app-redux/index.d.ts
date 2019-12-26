import { Action } from "redux";

// store state
import { Store } from "./store";

declare global {

  interface AppAction<T = any> extends Action<string> {
    payload: T;
  }

  type AppActionCreator = () => Action<string>;
  type AppActionCreatorWithPayload<T = any> = (payload: T) => AppAction<T>;

  type ReduxStore = Readonly<Store>

}

