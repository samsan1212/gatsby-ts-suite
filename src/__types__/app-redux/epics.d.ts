/* eslint-disable @typescript-eslint/no-explicit-any */
import { Epic } from "redux-observable"
import { AppAction } from "redux-functions"

export interface PageStoreWithEpic {
  epicMounted: boolean
}

declare global {
  type AppEpic<ActionPayload = unknown> = Epic<
    AppAction<ActionPayload>,
    any,
    ReduxStore,
    any
  >
}
