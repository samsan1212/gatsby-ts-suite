import * as React from "react";
import { Provider } from "react-redux";

import getStore from "./src/redux/store";
const store = getStore();

export const wrapRootElement = ({ element }) => {
    return (
        <Provider store={store}>
            {element}
        </Provider>
    );
};
