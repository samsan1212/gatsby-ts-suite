/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from "react"
import { Provider } from "react-redux"

import { ThemeProvider } from "styled-components"
import theme from "./src/styled/styled-theme"
import GlobalStyle from "./src/styled/global-style"

import getStore from "./src/redux/store"


export default ({ element }) => {
    const store = getStore();
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <>
                    <GlobalStyle />
                    {element}
                </>
            </Provider>
        </ThemeProvider>
    )
}
