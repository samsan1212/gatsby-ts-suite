import { combineEpics } from "redux-observable";
import { BehaviorSubject } from "rxjs";
import { mergeMap } from "rxjs/operators";

export const epic$ = new BehaviorSubject(combineEpics<AppAction<any>, any, ReduxStore, any>(
    // insert epics here
));

const rootEpic: AppEpic = (action$, state$) => epic$.pipe(
    mergeMap((epic) => epic(action$, state$, undefined)),
);

/**
 * To insert asynchronous epics, please use epics$.next(asyncEpics)
 * There is an example in SignUp Component (src/pages/SignUp/index.tsx)
 *
 * For more information, please visit https://redux-observable.js.org/docs/recipes/AddingNewEpicsAsynchronously.html
 */

export default rootEpic;
