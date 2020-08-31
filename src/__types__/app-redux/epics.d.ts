import { Epic } from "redux-observable";

export interface PageStoreWithEpic {
    epicMounted: boolean;
}

declare global {
    type AppEpic<ActionPayload = any> = Epic<AppAction<ActionPayload>, any, ReduxStore, any>
}