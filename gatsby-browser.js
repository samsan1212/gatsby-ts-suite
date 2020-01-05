import * as React from "react";
import { Provider } from "react-redux";

import { ThemeProvider } from "styled-components";
import theme from "./src/styled/styled-theme";
import GlobalStyle from "./src/styled/global-style";

import getStore from "./src/redux/store";

const store = getStore();

export const wrapRootElement = ({ element }) => {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <>
                    <GlobalStyle />
                    {element}
                </>
            </Provider>
        </ThemeProvider>
    );
};
