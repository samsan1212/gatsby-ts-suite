import rootEpic from "@/redux/epics";
import rootReducer from "@/redux/reducers";
import { applyMiddleware, compose, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";

const getStore = () => {
    // epic setup
    const epicMiddleware = createEpicMiddleware<AppAction<any>, any, ReduxStore, any>();
    const composeEnhancers =
        typeof window === "object" &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
            }) : compose;

    const enhancer = composeEnhancers(
        applyMiddleware(
            epicMiddleware,
            // add any other middleware here
        ),
        // other store enhancers if any
    );

    const store = createStore(rootReducer, enhancer);

    epicMiddleware.run(rootEpic);

    return store;
};

export default getStore;
